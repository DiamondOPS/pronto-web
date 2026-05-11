import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const zapierWebhookUrl = "https://hooks.zapier.com/hooks/catch/27558213/4ysfbn1/";

const recipients = [
  "joshua@dundeegroup.co.uk",
  "gareth@dundeegroup.co.uk",
  "david@dundeegroup.co.uk",
  "dmc@dundeegroup.co.uk",
  "darran@dundeegroup.co.uk",
  "enquiries@prontohousebuyer.co.uk",
];

type ContactPayload = {
  type?: string;
  postcode?: string;
  selectedAddress?: string;
  manualAddress?: string;
  useManualAddress?: boolean;
  helpType?: string;
  reasonForSelling?: string;
  timescale?: string;
  ownershipLength?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
  quickSaleExpectation?: string;
  fullName?: string;
  propertyAddress?: string;
  situation?: string;
};

function getFullName(payload: ContactPayload) {
  return (
    payload.fullName ||
    [payload.firstName, payload.lastName].filter(Boolean).join(" ") ||
    "Not provided"
  );
}

function getAddress(payload: ContactPayload) {
  return payload.useManualAddress
    ? payload.manualAddress
    : payload.selectedAddress || payload.propertyAddress;
}

function getFirstLineAddress(payload: ContactPayload) {
  const address = clean(getAddress(payload));

  if (address === "Not provided") {
    return "No address";
  }

  return address.split(",")[0]?.trim() || address;
}

function getCardName(payload: ContactPayload) {
  return `${getFirstLineAddress(payload)} -- ${clean(payload.postcode)} -- ${clean(getFullName(payload))}`;
}

function clean(value: unknown) {
  if (value === null || value === undefined || value === "") {
    return "Not provided";
  }

  return String(value).trim();
}

async function getPayload(request: Request): Promise<ContactPayload> {
  const contentType = request.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    return request.json();
  }

  const formData = await request.formData();

  return {
    type: clean(formData.get("type")),
    fullName: clean(formData.get("fullName")),
    phone: clean(formData.get("phone")),
    email: clean(formData.get("email")),
    propertyAddress: clean(formData.get("propertyAddress")),
    situation: clean(formData.get("situation")),
    postcode: clean(formData.get("postcode")),
    selectedAddress: clean(formData.get("selectedAddress")),
    manualAddress: clean(formData.get("manualAddress")),
    helpType: clean(formData.get("helpType")),
    reasonForSelling: clean(formData.get("reasonForSelling")),
    timescale: clean(formData.get("timescale")),
    ownershipLength: clean(formData.get("ownershipLength")),
    firstName: clean(formData.get("firstName")),
    lastName: clean(formData.get("lastName")),
    quickSaleExpectation: clean(formData.get("quickSaleExpectation")),
  };
}

function buildEmail(payload: ContactPayload) {
  const fullName = getFullName(payload);
  const address = getAddress(payload);

  const enquiryType =
    payload.type === "qualifier"
      ? "Seller expectation update"
      : "New property enquiry";

  const html = `
    <div style="font-family: Arial, sans-serif; color: #0f172a; line-height: 1.6;">
      <h2 style="margin: 0 0 16px; color: #071A2F;">${enquiryType}</h2>
      <p style="margin: 0 0 24px;">A new enquiry has been submitted through the Pronto House Buyer website.</p>

      <h3 style="margin: 24px 0 8px; color: #071A2F;">Contact Details</h3>
      <table style="border-collapse: collapse; width: 100%; max-width: 720px;">
        <tr><td style="padding: 8px; border: 1px solid #e2e8f0;"><strong>Name</strong></td><td style="padding: 8px; border: 1px solid #e2e8f0;">${clean(fullName)}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #e2e8f0;"><strong>Phone</strong></td><td style="padding: 8px; border: 1px solid #e2e8f0;">${clean(payload.phone)}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #e2e8f0;"><strong>Email</strong></td><td style="padding: 8px; border: 1px solid #e2e8f0;">${clean(payload.email)}</td></tr>
      </table>

      <h3 style="margin: 24px 0 8px; color: #071A2F;">Property Details</h3>
      <table style="border-collapse: collapse; width: 100%; max-width: 720px;">
        <tr><td style="padding: 8px; border: 1px solid #e2e8f0;"><strong>Postcode</strong></td><td style="padding: 8px; border: 1px solid #e2e8f0;">${clean(payload.postcode)}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #e2e8f0;"><strong>Address</strong></td><td style="padding: 8px; border: 1px solid #e2e8f0;">${clean(address)}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #e2e8f0;"><strong>Address entry</strong></td><td style="padding: 8px; border: 1px solid #e2e8f0;">${payload.useManualAddress ? "Manual address" : "Postcode lookup"}</td></tr>
      </table>

      <h3 style="margin: 24px 0 8px; color: #071A2F;">Seller Situation</h3>
      <table style="border-collapse: collapse; width: 100%; max-width: 720px;">
        <tr><td style="padding: 8px; border: 1px solid #e2e8f0;"><strong>How can we help?</strong></td><td style="padding: 8px; border: 1px solid #e2e8f0;">${clean(payload.helpType)}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #e2e8f0;"><strong>Reason for selling</strong></td><td style="padding: 8px; border: 1px solid #e2e8f0;">${clean(payload.reasonForSelling || payload.situation)}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #e2e8f0;"><strong>Timescale</strong></td><td style="padding: 8px; border: 1px solid #e2e8f0;">${clean(payload.timescale)}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #e2e8f0;"><strong>Ownership length</strong></td><td style="padding: 8px; border: 1px solid #e2e8f0;">${clean(payload.ownershipLength)}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #e2e8f0;"><strong>Quick sale expectation</strong></td><td style="padding: 8px; border: 1px solid #e2e8f0;">${clean(payload.quickSaleExpectation)}</td></tr>
      </table>
    </div>
  `;

  const text = `${enquiryType} - Pronto House Buyer

Name: ${clean(fullName)}
Phone: ${clean(payload.phone)}
Email: ${clean(payload.email)}

Postcode: ${clean(payload.postcode)}
Property address: ${clean(address)}
Address entry type: ${payload.useManualAddress ? "Manual address" : "Postcode lookup"}

How can we help?: ${clean(payload.helpType)}
Reason for selling: ${clean(payload.reasonForSelling || payload.situation)}
Timescale: ${clean(payload.timescale)}
Ownership length: ${clean(payload.ownershipLength)}
Quick sale expectation: ${clean(payload.quickSaleExpectation)}
`;

  return { fullName, enquiryType, html, text };
}

async function sendToZapier(payload: ContactPayload) {
  const fullName = getFullName(payload);
  const address = getAddress(payload);
  const cardName = getCardName(payload);
  const trelloDueDate = new Date().toISOString();

  const cardDescription = `
New Pronto House Buyer enquiry

Contact Details
Name: ${clean(fullName)}
Phone: ${clean(payload.phone)}
Email: ${clean(payload.email)}

Property Details
Postcode: ${clean(payload.postcode)}
Address: ${clean(address)}
Address entry: ${payload.useManualAddress ? "Manual address" : "Postcode lookup"}

Seller Situation
How can we help?: ${clean(payload.helpType)}
Reason for selling: ${clean(payload.reasonForSelling || payload.situation)}
Timescale: ${clean(payload.timescale)}
Ownership length: ${clean(payload.ownershipLength)}
Quick sale expectation: ${clean(payload.quickSaleExpectation)}
`.trim();

  const response = await fetch(zapierWebhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      cardName,
      cardDescription,
      trelloCardName: cardName,
      trelloDueDate,
      enquiryType: payload.type || "lead",
      fullName: clean(fullName),
      firstName: clean(payload.firstName),
      lastName: clean(payload.lastName),
      phone: clean(payload.phone),
      email: clean(payload.email),
      postcode: clean(payload.postcode),
      address: clean(address),
      firstLineAddress: getFirstLineAddress(payload),
      addressEntryType: payload.useManualAddress ? "Manual address" : "Postcode lookup",
      helpType: clean(payload.helpType),
      reasonForSelling: clean(payload.reasonForSelling || payload.situation),
      timescale: clean(payload.timescale),
      ownershipLength: clean(payload.ownershipLength),
      quickSaleExpectation: clean(payload.quickSaleExpectation),
    }),
  });

  if (!response.ok) {
    throw new Error(`Zapier webhook failed with status ${response.status}`);
  }
}

export async function POST(request: Request) {
  try {
    const payload = await getPayload(request);
    const { fullName, enquiryType, html, text } = buildEmail(payload);

    const zapierResult = await Promise.allSettled([sendToZapier(payload)]);

    if (zapierResult[0].status === "rejected") {
      console.error("Zapier webhook failed", zapierResult[0].reason);
    }

    const from = "Pronto House Buyer <onboarding@resend.dev>";
    const replyTo = payload.email && payload.email !== "Not provided" ? payload.email : undefined;

    const results = await Promise.allSettled(
      recipients.map((recipient) =>
        resend.emails.send({
          from,
          to: recipient,
          replyTo,
          subject: `${enquiryType} - ${clean(fullName)}`,
          html,
          text,
        }),
      ),
    );

    const failed = results.filter((result) => result.status === "rejected");

    if (failed.length === recipients.length) {
      console.error("All email sends failed", failed);
      return Response.json(
        { success: false, error: "Email failed to send" },
        { status: 500 },
      );
    }

    if (failed.length > 0) {
      console.error("Some email sends failed", failed);
    }

    return Response.json({
      success: true,
      sent: recipients.length - failed.length,
      failed: failed.length,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      { success: false, error: "Email failed to send" },
      { status: 500 },
    );
  }
}

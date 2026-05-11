import { NextResponse } from "next/server";

const IDEAL_POSTCODES_API_KEY =
  "ak_mp10yc6goXyPZlrApYsrkWk1ASInz";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const postcode = searchParams.get("postcode")?.trim();

  if (!postcode) {
    return NextResponse.json(
      {
        error: "Postcode is required",
      },
      {
        status: 400,
      },
    );
  }

  try {
    const response = await fetch(
      `https://api.ideal-postcodes.co.uk/v1/postcodes/${encodeURIComponent(
        postcode,
      )}?api_key=${IDEAL_POSTCODES_API_KEY}`,
      {
        cache: "no-store",
      },
    );

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        {
          error:
            data?.message ||
            data?.error ||
            "Address lookup failed",
          providerResponse: data,
        },
        {
          status: response.status,
        },
      );
    }

    const addresses = Array.isArray(data?.result)
      ? data.result.map(
          (item: {
            line_1?: string;
            line_2?: string;
            line_3?: string;
            post_town?: string;
            postcode?: string;
          }) => {
            return [
              item.line_1,
              item.line_2,
              item.line_3,
              item.post_town,
              item.postcode,
            ]
              .filter(Boolean)
              .join(", ");
          },
        )
      : [];

    if (addresses.length === 0) {
      return NextResponse.json(
        {
          error: "No addresses found for that postcode",
        },
        {
          status: 404,
        },
      );
    }

    return NextResponse.json({ addresses });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Address lookup failed",
        details: String(error),
      },
      {
        status: 500,
      },
    );
  }
}

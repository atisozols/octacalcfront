import { NextResponse } from 'next/server';

type Company = {
  id: string;
  logo: string;
  prices: number[];
};

export async function POST(request: Request) {
  try {
    const { reg, vin } = await request.json();

    if (!reg || !vin) {
      return NextResponse.json({ error: 'Missing reg or vin' }, { status: 400 });
    }

    const companies: Company[] = [
      {
        id: "balcia",
        logo: '/balcia.png',
        prices: [14.50, 33.56, 65.20, 98.80, 117.23],
      },
      {
        id: "gjensidige",
        logo: '/gjensidige.png',
        prices: [13.19, 31.12, 62.34, 93.01, 113.24],
      },
      {
        id: "ergo",
        logo: '/ergo.png',
        prices: [12.92, 29.84, 59.96, 90.13, 110.04],
      },
    ];

    return NextResponse.json(companies);
  } catch (error) {
    console.error("Error processing the request:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

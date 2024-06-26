import {NextResponse} from "next/server";
import * as paypal from "../paypal-api";

export async function POST(request) {
	const data = await request.json();
	try {
		const order = await paypal.createOrder(data);
		return NextResponse.json(order);
	} catch (err) {
		return NextResponse.json({error: err});
	}
}

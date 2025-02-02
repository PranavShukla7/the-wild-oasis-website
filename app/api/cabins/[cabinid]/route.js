import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";

export async function GET(request, context) {
  const params = await context.params;
  const cabinid = Number(params.cabinid);

  if (!cabinid) {
    return Response.json({ message: "Invalid cabin id" }, { status: 400 });
  }

  try {
    const [cabin, bookedDates] = await Promise.all([
      getCabin(cabinid),
      getBookedDatesByCabinId(cabinid),
    ]);

    return Response.json({ cabin, bookedDates });
  } catch (error) {
    return Response.json({ message: error.message });
  }
}

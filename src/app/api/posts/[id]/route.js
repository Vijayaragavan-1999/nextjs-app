import { NextResponse } from "next/server";
import Post from "../../../../models/Post";
import connect from "../../../../utils/db";

export const GET = async (request, {params}) => {
  const {id} = params
  try {
    const posts = await Post.findById(id);;

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    return new NextResponse(err);
  }
};

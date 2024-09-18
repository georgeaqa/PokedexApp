import { supabase } from "@/src/lib/supabase";

export async function getTypes() {
  try {
    const { data, error } = await supabase.from("types").select("*");
    if (error) {
      throw new Error(error.message);
    }
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

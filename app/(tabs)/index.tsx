import { useCampus } from "@/contexts/campus-context";
import { Redirect } from "expo-router";

export default function Index() {
  const { campus } = useCampus();
  return <Redirect href={`/${campus}`} />;
}

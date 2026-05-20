import type { Metadata } from "next";
import DeleteAccountFlow from "./delete-account-flow";

export const metadata: Metadata = {
  title: "Delete Account — AiravatL",
  description: "Request deletion of your AiravatL account. Review consequences and submit your request.",
  alternates: { canonical: "/delete-account" },
};

export default function Page() {
  return <DeleteAccountFlow />;
}

import React, { type ReactNode } from "react";
import Footer from "@theme-original/Footer";
import type FooterType from "@theme/Footer";
import type { WrapperProps } from "@docusaurus/types";
import { Waitlist } from "../../components/Waitlist/Waitlist";

type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(props: Props): ReactNode {
  return (
    <>
      <div style={{ marginBottom: "2rem" }}>
        <Waitlist.Card>
          <Waitlist />
        </Waitlist.Card>
      </div>
      <Footer {...props} />
    </>
  );
}

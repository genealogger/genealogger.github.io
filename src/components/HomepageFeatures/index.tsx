import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import React from "react";

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Local & Private",
    description: (
      <>
        Your personal history is private. Our built-in OCR text extraction and
        visual face detection run entirely on your desktop GPU/CPU. Your
        documents, photos, and family records never touch an external server or
        cloud AI model.
      </>
    ),
  },
  {
    title: "Frictionless Ingestion",
    description: (
      <>
        Stop wasting hours doing manual data entry. Drag and drop raw scans,
        letters, or multi-page documents directly into your workspace. The smart
        ingest engine auto-stacks multi-page files, extracts text, catches
        duplicates, and queues metadata for 1-click tagging.
      </>
    ),
  },
  {
    title: "Evidence-Based Storytelling",
    description: (
      <>
        Facts belong in context. Connect people, places, and physical records
        into compelling narrative Topics equipped with auto-generated GEDCOM
        citations, bi-directional backlinks, and side-by-side document views.
      </>
    ),
  },
  {
    title: "The Box Workflow",
    description: (
      <>
        Turn physical shoe boxes of inherited letters and mementos into
        organized digital collections. Track physical storage locations,
        generate auto-incrementing IDs, and use smart stats to identify unlinked
        "orphaned" items.
      </>
    ),
  },
  {
    title: "The Photo Album Workflow",
    description: (
      <>
        Preserve page-level spatial context alongside individual photos. Easily
        merge front and back scans into single records so handwritten dates and
        back-of-photo notes are never lost.
      </>
    ),
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    // <div className={clsx("col col--4")}>
    <div className="padding-horiz--lg padding-vert--sm">
      <Heading as="h4" className={styles["callout_header"]}>
        {title}
      </Heading>
      <p>{description}</p>
    </div>
    // </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container container--narrow">
        {FeatureList.map((props, idx) => (
          <React.Fragment key={idx}>
            <Feature {...props} />
            <div className="section-border margin-bottom--md"></div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

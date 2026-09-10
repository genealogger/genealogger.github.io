import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";
import { Waitlist } from "../components/Waitlist/Waitlist";
import { Card } from "../components/Card/Card";

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Desktop apps for privacy-minded genealogists and family archivists"
    >
      <main>
        <div className={styles.section}>
          <div className="container container--narrow">
            <div className={styles.shadowBox}>
              <div className="padding-horiz--lg padding-vert--lg">
                <h2 className={styles.mainTitle}>
                  Bring Your Family History to Life Without Sacrificing Privacy.
                </h2>
                <p
                  className="text-dimmed text-lg"
                  style={{ paddingBottom: "2rem" }}
                >
                  The desktop archive engine that turns raw photos, scans, and
                  documents into rich, connected stories. Everything runs 100%
                  locally on your computer—no cloud AI, no subscription traps,
                  and zero vendor lock-in.
                </p>

                <div className={styles.buttons}>
                  <Link
                    className="button button--primary button--lg"
                    to="/docs/category/features"
                  >
                    Explore Features
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.sectionBorder}></div>
          <div className="container container--narrow">
            <div className={styles.shadowBox}>
              <div className="padding-horiz--lg padding-vert--lg">
                <h2 className={styles.mainTitle}>
                  Complete Lifecycle: Ingest to Export
                </h2>
                <Card>
                  <table className={styles.stageTable}>
                    <thead>
                      <tr>
                        <td>Stage</td>
                        <td>What You Get</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>Import</th>
                        <td>
                          Drag-and-drop multi-file ingest, on-device OCR, face
                          recognition, and auto-grouping.
                        </td>
                      </tr>
                      <tr>
                        <th>Archive</th>
                        <td>
                          Physical location tracking for boxes, album page
                          preservation, and multi-scan merging.
                        </td>
                      </tr>
                      <tr>
                        <th>Search</th>
                        <td>
                          Lightning-fast Cmd+K / Ctrl+K spotlight search and
                          advanced query language scanning full OCR text.
                        </td>
                      </tr>
                      <tr>
                        <th>Synthesize</th>
                        <td>
                          Bi-directional linking, interactive record references,
                          and narrative topic notes.
                        </td>
                      </tr>
                      <tr>
                        <th>Export</th>
                        <td>
                          Total data freedom. Export to Markdown bundles, PDF
                          reports, or full JSON database backups anytime.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Card>
              </div>
            </div>
          </div>
          <Waitlist.Card>
            <Waitlist />
          </Waitlist.Card>
          <HomepageFeatures />
        </div>
      </main>
    </Layout>
  );
}

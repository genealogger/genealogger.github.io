import { PropsWithChildren } from "react";
import classes from "./Waitlist.module.css";
import { Card } from "../Card/Card";

export function Waitlist() {
  return (
    <form action="https://submit-form.com/auU9wxB82">
      <div className={classes.waitlistWrapper}>
        <input
          type="email"
          name="email"
          placeholder="Enter email for beta access..."
        />
        <button type="submit">Secure Beta Spot</button>
      </div>
      <div className={classes.waitlistDisclaimer}>
        We'll email you when the beta is ready in late 2026.
      </div>
      <div
        className="cf-turnstile"
        data-sitekey="0x4AAAAAAEvh2uVTMZb9XrIx"
      ></div>
    </form>
  );
}

Waitlist.Card = ({ children }: PropsWithChildren) => {
  return (
    <div className={classes.waitlistCard}>
      <Card>{children}</Card>
    </div>
  );
};

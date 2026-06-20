import { Typography } from "antd";

export default function Footer() {
  return (
    <div className="Footer">
      <Typography.Link href="tel:+5527999998888">
        +5527999998888
      </Typography.Link>
      <Typography.Link
        href="https://github.com/humbertoromanojr/DailyExpense_IncomeDiary"
        target="_blank"
      >
        Privacy Policy
      </Typography.Link>
      <Typography.Link
        href="https://github.com/humbertoromanojr/DailyExpense_IncomeDiary"
        target="_blank"
      >
        Terms of Use
      </Typography.Link>
    </div>
  );
}

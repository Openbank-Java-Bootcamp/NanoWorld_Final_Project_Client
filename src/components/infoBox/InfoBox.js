import "./InfoBox.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo(props) {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Welcome to NanoWold</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">Hope to see you in the next event: </span>
          <span className="featuredMoneyRate">
           <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}

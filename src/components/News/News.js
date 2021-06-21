import React from "react";
import Header from "../Header/Header";
import twitterHeader from "../images/twitter.jpg";
import "./News.css";
import {
  TwitterTimelineEmbed,
  TwitterFollowButton,
  TwitterMentionButton,
  TwitterHashtagButton,
} from "react-twitter-embed";

function News() {
  return (
    <div className="news">
      <Header
        firstTitle="Our Latest"
        bigTitle="News"
        subtitle="Latest Tweets Regarding Douro Wines"
        imageUrl={twitterHeader}
      />
      <div className="feedTwitter">
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="WineDouro"
          options={{ height: 400 }}
        />
      </div>
      <TwitterFollowButton screenName={"WineDouro"} />
      <TwitterHashtagButton tag={"dourowines"} />
      <TwitterMentionButton screenName={"WineDouro"} />
    </div>
  );
}

export default News;

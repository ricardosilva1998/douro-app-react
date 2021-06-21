import React from "react";

async function githubUsers() {
  let response = await fetch(
    "https://maps.googleapis.com/maps/api/place/textsearch/json?query=douro+wine-tour&key=AIzaSyAD7VRDkgX3oPGMTwk7GTqxiu8OeT-CqoY"
  );
  let users = await response.json();
  alert(users);
}

githubUsers();

function Blog() {
  return <div></div>;
}

export default Blog;

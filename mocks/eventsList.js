import dayjs from "dayjs";

export const eventsList = [
  {
    name: "International Youth Campmeeting",
    date: "12/26/2020",
    time: "",
    address: "WECA HQ, & Other locations",
    group: "general",
    banner:
      "https://oluwafemi-idear.github.io/yddweb/wp-content/uploads/sites/13/2015/01/ph8-600x368.jpg",
  },
  {
    name: "Thanksgiving Youth Service",
    date: "January 3, 2021",
    time: "5pm",
    address: "All Regions",
    group: "general",
    banner:
      "https://oluwafemi-idear.github.io/yddweb/wp-content/uploads/sites/13/2015/01/ph8-600x368.jpg",
  },
  {
    name: "Youth Workers Retreat",
    date: "January 30, 2021",
    time: "2pm - 6pm",
    address: "Campground Anthony village Lagos",
    group: "general",
    banner:
      "https://oluwafemi-idear.github.io/yddweb/wp-content/uploads/sites/13/2015/01/ph8-600x368.jpg",
  },
  {
    name: "AFCMF Regional Retreat",
    date: "February 5, 2021",
    time: "2pm - 6pm",
    address: "All Regions",
    group: "singles",
    banner:
      "https://oluwafemi-idear.github.io/yddweb/wp-content/uploads/sites/13/2015/01/ph8-600x368.jpg",
  },
  {
    name: "Boundless Love",
    date: "February 14, 2021",
    time: "2pm - 6pm",
    address: "All Regions",
    group: "general",
    banner:
      "https://oluwafemi-idear.github.io/yddweb/wp-content/uploads/sites/13/2015/01/ph8-600x368.jpg",
  },
  {
    name: "Singles Timeout with Jesus",
    date: "February 17, 2021",
    time: "",
    address: "Campground Anthony village Lagos",
    group: "general",
    banner:
      "https://oluwafemi-idear.github.io/yddweb/wp-content/uploads/sites/13/2015/01/ph8-600x368.jpg",
  },
  {
    name: "Singles Forum",
    date: "November 6, 2020",
    time: "2pm - 6pm",
    address: "Nationwide",
    group: "general",
    banner:
      "https://oluwafemi-idear.github.io/yddweb/wp-content/uploads/sites/13/2015/01/ph8-600x368.jpg",
  },
  {
    name: "National Youth Leaders Capacity Building",
    date: " March 19, 2021",
    time: "2pm - 6pm",
    address: "National",
    group: "general",
    banner:
      "https://oluwafemi-idear.github.io/yddweb/wp-content/uploads/sites/13/2015/01/ph8-600x368.jpg",
  },
  {
    name: "AFCMF Retreat",
    date: "December 15, 2020",
    time: "2pm - 6pm",
    address: "Campground Anthony village Lagos",
    group: "afcmf",
    banner:
      "https://oluwafemi-idear.github.io/yddweb/wp-content/uploads/sites/13/2015/01/ph8-600x368.jpg",
  },
].filter((e) => dayjs(e.date).isAfter(dayjs()));

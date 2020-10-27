import dayjs from "dayjs";

export const eventsList = [
  {
    name: "International Youth Campmeeting",
    date: "December 26, 2020",
    time: "",
    address: "Regional",
    group: "general",
    banner:
      "https://oluwafemi-idear.github.io/yddweb/wp-content/uploads/sites/13/2015/01/ph8-600x368.jpg",
  },
  {
    name: "AFCF/AFCMF Regional Retreat",
    date: "Oct 30, 2020",
    time: "5pm",
    address: "All Regions",
    group: "general",
    banner:
      "https://oluwafemi-idear.github.io/yddweb/wp-content/uploads/sites/13/2015/01/ph8-600x368.jpg",
  },
  {
    name: "National Central Working Committee (NCWC)",
    date: "Oct 30, 2020",
    time: "2pm - 6pm",
    address: "Campground Anthony village Lagos",
    group: "general",
    banner:
      "https://oluwafemi-idear.github.io/yddweb/wp-content/uploads/sites/13/2015/01/ph8-600x368.jpg",
  },
  {
    name: "Singles Forum",
    date: "October 28, 2020",
    time: "2pm - 6pm",
    address: "Campground Anthony village Lagos",
    group: "singles",
    banner:
      "https://oluwafemi-idear.github.io/yddweb/wp-content/uploads/sites/13/2015/01/ph8-600x368.jpg",
  },
  {
    name: "Youth Leaders’ Capacity Building (YLCB)",
    date: "November 1, 2020",
    time: "2pm - 6pm",
    address: "Campground Anthony village Lagos",
    group: "general",
    banner:
      "https://oluwafemi-idear.github.io/yddweb/wp-content/uploads/sites/13/2015/01/ph8-600x368.jpg",
  },
  {
    name: "International Youth Campmeeting",
    date: "December 26, 2020",
    time: "",
    address: "Campground Anthony village Lagos",
    group: "general",
    banner:
      "https://oluwafemi-idear.github.io/yddweb/wp-content/uploads/sites/13/2015/01/ph8-600x368.jpg",
  },
  {
    name: "Sunday Meet Up",
    date: "November 6, 2020",
    time: "2pm - 6pm",
    address: "Campground Anthony village Lagos",
    group: "general",
    banner:
      "https://oluwafemi-idear.github.io/yddweb/wp-content/uploads/sites/13/2015/01/ph8-600x368.jpg",
  },
  {
    name: "Youth Service",
    date: "November 9, 2020",
    time: "2pm - 6pm",
    address: "Campground Anthony village Lagos",
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

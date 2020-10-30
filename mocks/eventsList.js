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
    name: "Thanksgiving Youth Service - Oh Taste and see",
    date: "01/03/2021",
    time: "5pm",
    address: "All Branches Nationwide",
    group: "General",
    banner:
      "https://oluwafemi-idear.github.io/yddweb/wp-content/uploads/sites/13/2015/01/ph8-600x368.jpg",
  },
  {
    name: "Anthony District Youth Workers Retreat",
    date: "01/30/2021",
    time: "2pm - 6pm",
    address: "WeCA HQ, Anthony village Lagos",
    group: "General",
    banner:
      "https://oluwafemi-idear.github.io/yddweb/wp-content/uploads/sites/13/2015/01/ph8-600x368.jpg",
  },
  {
    name: "AFCMF Regional Retreat",
    date: "02/05/2021",
    time: "2pm - 6pm",
    address: "Selected Locations In Nigeria",
    group: "General",
    banner:
      "https://oluwafemi-idear.github.io/yddweb/wp-content/uploads/sites/13/2015/01/ph8-600x368.jpg",
  },
  {
    name: "Boundless Love",
    date: "02/14/2021",
    time: "2pm - 6pm",
    address: "All Regions",
    group: "General",
    banner:
      "https://oluwafemi-idear.github.io/yddweb/wp-content/uploads/sites/13/2015/01/ph8-600x368.jpg",
  },
  {
    name: "Singles Timeout with Jesus",
    date: "02/17/2021",
    time: "",
    address: "Campground Anthony village Lagos",
    group: "Singles",
    banner:
      "https://oluwafemi-idear.github.io/yddweb/wp-content/uploads/sites/13/2015/01/ph8-600x368.jpg",
  },
  {
    name: "National Youth Leaders Capacity Building",
    date: "03/06/2020",
    time: "2pm - 6pm",
    address: "Nationwide",
    group: "Singles",
    banner:
      "https://oluwafemi-idear.github.io/yddweb/wp-content/uploads/sites/13/2015/01/ph8-600x368.jpg",
  },
  {
    name: "Singles Forum",
    date: " 03/19/2021",
    time: "2pm - 6pm",
    address: "Nationwide",
    group: "General",
    banner:
      "https://oluwafemi-idear.github.io/yddweb/wp-content/uploads/sites/13/2015/01/ph8-600x368.jpg",
  },
  {
    name: "AFCMF Retreat",
    date: "December 15, 2020",
    time: "2pm - 6pm",
    address: "Campground Anthony village Lagos",
    group: "AFCMF",
    banner:
      "https://oluwafemi-idear.github.io/yddweb/wp-content/uploads/sites/13/2015/01/ph8-600x368.jpg",
  },
].filter((e) => dayjs(e.date).isAfter(dayjs()));

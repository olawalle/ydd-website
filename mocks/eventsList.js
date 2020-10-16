import dayjs from "dayjs";

export const eventsList = [
  {
    name: "Sunday Meet Up",
    date: "2020-10-12 14:00",
    time: "2pm - 4pm",
    address: "Campground Anthony village Lagos",
    group: "general",
    banner:
      "https://oluwafemi-idear.github.io/yddweb/wp-content/uploads/sites/13/2015/01/ph8-600x368.jpg",
  },
  {
    name: "Holy shift: Strategic think",
    date: "2020-24-10 14:00",
    time: "2pm - 4pm",
    address: "Campground Anthony village Lagos",
    group: "afcf",
    banner:
      "https://oluwafemi-idear.github.io/yddweb/wp-content/uploads/sites/13/2015/01/ph8-600x368.jpg",
  },
  {
    name: "Youth Service",
    date: "2020-25-10 14:00",
    time: "2pm - 4pm",
    address: "Campground Anthony village Lagos",
    group: "general",
    banner:
      "https://oluwafemi-idear.github.io/yddweb/wp-content/uploads/sites/13/2015/01/ph8-600x368.jpg",
  },
  {
    name: "Singles Forum",
    date: "2020-28-10 14:00",
    time: "2pm - 4pm",
    address: "Campground Anthony village Lagos",
    group: "singles",
    banner:
      "https://oluwafemi-idear.github.io/yddweb/wp-content/uploads/sites/13/2015/01/ph8-600x368.jpg",
  },
  {
    name: "Youth Leaders’ Capacity Building (YLCB)",
    date: "2020-01-11 14:00",
    time: "2pm - 4pm",
    address: "Campground Anthony village Lagos",
    group: "general",
    banner:
      "https://oluwafemi-idear.github.io/yddweb/wp-content/uploads/sites/13/2015/01/ph8-600x368.jpg",
  },
  {
    name: "International Youth Campmeeting",
    date: "2020-04-11 14:00",
    time: "2pm - 4pm",
    address: "Campground Anthony village Lagos",
    group: "general",
    banner:
      "https://oluwafemi-idear.github.io/yddweb/wp-content/uploads/sites/13/2015/01/ph8-600x368.jpg",
  },
  {
    name: "Sunday Meet Up",
    date: "2020-06-11 14:00",
    time: "2pm - 4pm",
    address: "Campground Anthony village Lagos",
    group: "general",
    banner:
      "https://oluwafemi-idear.github.io/yddweb/wp-content/uploads/sites/13/2015/01/ph8-600x368.jpg",
  },
  {
    name: "Youth Service",
    date: "2020-09-11 14:00",
    time: "2pm - 4pm",
    address: "Campground Anthony village Lagos",
    group: "general",
    banner:
      "https://oluwafemi-idear.github.io/yddweb/wp-content/uploads/sites/13/2015/01/ph8-600x368.jpg",
  },
  {
    name: "AFCMF Retreat",
    date: "2020-15-12 14:00",
    time: "2pm - 4pm",
    address: "Campground Anthony village Lagos",
    group: "afcmf",
    banner:
      "https://oluwafemi-idear.github.io/yddweb/wp-content/uploads/sites/13/2015/01/ph8-600x368.jpg",
  },
].filter((e) => dayjs(e.date).isAfter(dayjs()));

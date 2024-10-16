import { getDevotion } from "./open-heaven-data.js";

const todaysDate = new Date().toISOString().split("T")[0];

const todaysDayNumber = todaysDate.split("-")[2];
const todaysYearNumber = todaysDate.split("-")[0];
const date = new Date(todaysDate);

const todaysDevotion = getDevotion(todaysDate)[0];
var html;

console.log(todaysDevotion["topic"]);
html = `
    <h3>
      Open Heaven For Today ${
        todaysDevotion["date"].split("-")[0]
      } ${getDayName(date)} Daily Devotional By
      <span class="title"
        >Pastor <span class="whitespace-nowrap">E. A. Adeboye</span> – Friend
        Of God?</span
      >
    </h3>
    <p><span class="title">Date:</span> ${getDayName(date)} ${getMonthName(
  date
)} ${todaysDayNumber}, ${todaysYearNumber}</p>
    <p>
      <span class="title">Topic:</span> <span>${todaysDevotion["topic"]}</span>
    </p>
    <p>
      <span class="title">Memorise:</span>
      <span
        >And said, verily say unto you, Except ye be converted, And become as
        little children, ye shall not enter the kingdom of heaven.
        <i>Matthew 18:3</i></span
      >
    </p>
    <div>
      <p><span class="title">Read:</span> <span>Matthew 18:1-5</span></p>
      <ul class="bible-text-ul">
        <li>
          At the same time came the disciples unto Jesus, saying, Who is the
          greatest in the kingdom of heaven?
        </li>
        <li>
          And Jesus called a little child unto him, and set him in the midst
          of them,
        </li>
        <li>
          And said, Verily I say unto you, Except ye be converted, and become
          as little children, ye shall not enter into the kingdom of heaven.
        </li>
        <li>
          Whosoever therefore shall humble himself as this little child, the
          same is greatest in the kingdom of heaven.
        </li>
        <li>
          And whoso shall receive one such little child in my name receiveth
          me.
        </li>
      </ul>
    </div>

    <p><span class="title">Bible In one year:</span> John 3-4</p>

    <h4 class="center-text">Open Heaven For Today 2024 MESSAGE</h4>
    <p class="open-heaven-first-parag">
      The Christian walk is very unique. This is because Christianity is
      dependent on an individual's ability to believe. As a result of this,
      Christians are generally called 'believers'. A scientist might say,
      "Prove it to me, and will believe you," but in Christendom, God says,
      "Believe Me, and I will prove it to you." This is the mystery of
      Christianity.
    </p>
    <p>
      To an unbeliever, our faith is proof that we, as Christians, are not
      wise. This is because a natural man cannot understand the things of the
      Spirit of God (1 Corinthians 2:14). However, in 1 Corinthians 1:27, the
      Bible tells us that God uses the foolish things of this world to
      confound the wise. For example, it does not make sense to unbelievers
      when we say that a virgin gave birth to Jesus Christ. Most times, they
      think to themselves, "How can a virgin give birth?"
    </p>
    <p>
      Jesus said something very important in our memory verse for today. He
      said that only those who are like children will inherit the kingdom. In
      other words, you must believe Him like a child believes his or her
      parents, whether what they say makes sense or not. Many people make the
      mistake of trying to relate with God logically. This is impossible
      because the Bible says that God's ways and thoughts are beyond human
      comprehension (lsaiah 55:8-9).
    </p>
    <p>
      There are people who argue against Christianity with logic. Do not argue
      with such people because you cannot explain Christianity logically. Paul
      told Timothy in 2 Timothy 2:23- 25 to avoid unnecessary arguments with
      people concerrning the truth of God's word. The way to prove that God is
      real is not through arguments but by the display of power as Elijah did
      in 1 Kings 18. Apostle Paul said in 1 Corinthians 4:20:
      <strong
        ><i>
          “For the kingdom of God is not in word, but in power:"</i
        ></strong
      >
      Furthermore, John 4:48 says,
      <strong
        ><i
          >"...Except ye see signs and wonders, ye will not believe."</i
        ></strong
      >
      No matter how hard you try, you cannot Win anyone to Christ by an
      argument. Once you have shared the gospel of Christ with unbelievers,
      commit their hearts to God, as it is only the Holy Spirit that can
      convict and convert them. Do not argue with them about your Christian
      faith, rather, ask God to use you for signs and wonders so that when
      they see the power of God, they will surrender without any argument.
    </p>
    <p>
      Beloved, I pray that the power of God will be evident in your life and
      that He will use you to lead many people into HiS kingdom, in
      Jesus'name.
    </p>

    <section class="hymn">
      <p>
        <span class="title">Hymn</span>
        <span> Standing On the promises of Christ my king</span>
      </p>
      <ul class="hymn-ul">
        <li>
          Standing on the promises of Christ my King, Through eternal ages let
          His praises ring, Glory in the highest, I will shout and sing,
          Standing on the promises of God.
          <div class="hymn__chorus">
            <p>Standing, standing,</p>
            <p>Standing on the promises of God my Savior;</p>
            <p>Standing, standing,</p>
            <p>I’m standing on the promises of God.</p>
          </div>
        </li>
        <li>
          Standing on the promises that cannot fail, When the howling storms
          of doubt and fear assail, By the living Word of God I shall prevail,
          Standing on the promises of God.
        </li>
        <li>
          Standing on the promises that cannot fail, When the howling storms
          of doubt and fear assail, By the living Word of God I shall prevail,
          Standing on the promises of God.
        </li>
        <li>
          Standing on the promises I shall not fall, List’ning every moment to
          the Spirit’s call. Resting in my Savior as my All in all, Standing
          on the promises of God.
        </li>
      </ul>
    </section>
    <p>
      <span class="title">Prayer Point:</span>
      <span
        >Father, use me to showcase your power so that I can win my generation
        for you.</span
      >
    </p>
  `;

function getDayName(date) {
  // Array of day names
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  // Get the day index (0-6)
  const dayIndex = date.getDay();

  // Return the day name
  return days[dayIndex];
}

function getMonthName(date) {
  // Array of month names
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  // Get the month index (0-11)
  const monthIndex = date.getMonth();

  // Return the month name
  return months[monthIndex];
}

// console.log(getDayName(date));
// console.log(getMonthName(date));

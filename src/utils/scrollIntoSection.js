function scrollIntoSection(targetContent) {
  // All Target's selectors
  const hero = document.querySelector("#hero");
  const audience_1 = document.querySelector(".audience_1");
  const audience_2 = document.querySelector(".audience_2");
  const get_in_touch = document.querySelector("#get_in_touch");
  const audience_3 = document.querySelector(".audience_3");
  const audience_4 = document.querySelector(".audience_4");
  const contact = document.querySelector("#contact");

  if (targetContent === "Home")
    hero?.scrollIntoView({
      behavior: "smooth",
    });
  if (targetContent === "Audience")
    audience_1?.scrollIntoView({
      behavior: "smooth",
    });
  if (targetContent === "Services")
    audience_2?.scrollIntoView({
      behavior: "smooth",
    });
  if (targetContent === "Get in touch")
    get_in_touch?.scrollIntoView({
      behavior: "smooth",
    });
  if (targetContent === "Benefits")
    audience_3?.scrollIntoView({
      behavior: "smooth",
    });
  if (targetContent === "How it works")
    audience_4?.scrollIntoView({
      behavior: "smooth",
    });
  if (targetContent === "Contact us")
    contact?.scrollIntoView({
      behavior: "smooth",
    });
}

export default scrollIntoSection;

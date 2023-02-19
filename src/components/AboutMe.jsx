export function AboutMe() {
  return (
    <div className="about-me flex h-[125px] min-w-[100%]">
      <div className="avatar min-w-fit">
        <img
          src="images/eva-jonson.png"
          alt="Me"
          className="h-[100%] rounded-full"
        />
      </div>
      <div className="info pl-[10px] leading-[20px] py-[7px] w-[100%]">
        <div className="name font-bold">Eva Jonson</div>
        <div className="position font-[400] text-[12px] text-custom-gray mb-[5px]">
          Sales Manager
        </div>
        <div className="status py-[6px] text-[14px] whitespace-nowrap before:block before:absolute before:bg-[#FFFBC8] before:border before:rounded-[6px] before:border-[#DADADA] before:top-0 before:bottom-0 before:right-0 before:left-[-45px] before:z-[-1] relative">
          I will find the best offers for you. <br />
          My services are absolutely free.
        </div>
      </div>
    </div>
  )
}

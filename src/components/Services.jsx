export function Services() {
  return (
    <div className="services pl-[135px] w-[100%] mb-[25px]">
      <div className="title ml-auto w-fit mr-[25px] mb-[8px]">Services</div>
      <div className="horizontal-line min-h-[1px] w-[100%] bg-[#DADADA] mb-[16px]"/>
      <div className="statistic flex text-[13px]">
        <div className="name w-[100%]">
          <div className="w-[100%] pl-[6px] py-[3px] mb-[2px] relative before:block before:absolute before:bg-[#B1E19B] before:rounded-r-[3px] before:top-0 before:bottom-0 before:right-[20%] before:left-0 before:z-[-1]">
            Manual tour booking
          </div>
          <div className="w-[100%] pl-[6px] py-[3px] mb-[2px] relative before:block before:absolute before:bg-[#ACE2F8] before:rounded-r-[3px] before:top-0 before:bottom-0 before:right-[80%] before:left-0 before:z-[-1]">
            Package tours
          </div>
          <div className="w-[100%] pl-[6px] py-[3px] relative before:block before:absolute before:bg-[#ACE2F8] before:rounded-r-[3px] before:top-0 before:bottom-0 before:right-[85%] before:left-0 before:z-[-1]">
            Hotels
          </div>
        </div>
        <div className="amount mr-[40px] text-end font-bold">
          <div className="py-[3px] mb-[2px]">11</div>
          <div className="py-[3px] mb-[2px]">3</div>
          <div className="py-[3px]">1</div>
        </div>
      </div>
      <div className="horizontal-line min-h-[1px] w-[100%] bg-[#DADADA] mt-[16px] mb-[10px]" />
      <div className="total flex justify-between font-bold">
        <div className="">Total</div>
        <div className="mr-[40px]">15</div>
      </div>
    </div>
  )
}

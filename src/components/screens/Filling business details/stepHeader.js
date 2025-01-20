const StepHeader = () => {

    let currentdate = new Date();
    let cyear = currentdate.getFullYear();
    let cmonth = currentdate.getMonth() + 1;
    let cdate = currentdate.getDate();
    
    let finaldate = new Date();
    finaldate.setDate(currentdate.getDate() + 15);
    let fyear = finaldate.getFullYear();
    let fmonth = finaldate.getMonth() + 1;  
    let fdate = finaldate.getDate();
    
    return(
        <>
        <div className="bg-yellow-200 w-[100%] text-red-600 font-bold items-center p-1 mb-4 text flex">
            <div className=""><ion-icon name="notifications"></ion-icon></div>
           
            <div className="marquee-container">
                <div className="marquee-text">
                    Mobile number/e-mail id linked with Aadhar can be verified at <span className="text-green-600">https://residental.uidai.gov.in/verify-email-mobile.</span> Please wait 45 seconds before regenerating the OTP for Aadhar Authentication.
                </div>
            </div>
        </div>

        <div className="bg-yellow-200 w-[100%] header-text text-left">
            <div className="flex">
                <div className="w-[25%] p-2">Application Type</div>
                <div className="w-[25%] p-2">Due Date to Complete</div>
                <div className="w-[25%] p-2">Last Modified</div>
                <div className="w-[25%] p-2">Profile</div>
            </div>

            <div className="flex">
                <div className="w-[25%] p-2">New Registration</div>
                <div className="w-[25%] p-2">{fdate}/{fmonth}/{fyear}</div>
                <div className="w-[25%] p-2">{cdate}/{cmonth}/{cyear}</div>
                <div className="w-[25%] p-2">0%</div>
            </div>
        </div>
        </>
    )
}

export default StepHeader;
import { degrees, PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import { useState, useEffect, useRef } from 'react';
import formPdf from '../pdf/2316Jan2018ENCSfinal.pdf'
import classes from '../page/css/layout.module.css'

const FormCom2316 = (props) => {
    console.log('props', props)
    const [pdfInfo, setPdfInfo] = useState([]);
    const viewer = useRef(null);

    useEffect(() => {
      modifyPdf();
    }, []);
  
    const modifyPdf = async () => {
      const existingPdfBytes = await fetch(formPdf).then((res) => res.arrayBuffer());
  
      const pdfDoc = await PDFDocument.load(existingPdfBytes);
      const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
      const courierBold = await pdfDoc.embedFont(StandardFonts.CourierBold);
  
      const pages = pdfDoc.getPages();
      const firstPage = pages[0];
      
      // Get the width and height of the first page
      const { width, height } = firstPage.getSize();
    //   firstPage.drawText("lots for less !!!", {
    //     x: 5,
    //     y: height / 2 + 300,
    //     size: 12,
    //     font: helveticaFont,
    //     color: rgb(0.95, 0.1, 0.1),
    //     rotate: degrees(-45),
    //   });

    // year
      firstPage.drawText("2021", {
        x: 139,
        y:824,
        size: 10.5,
        font: courierBold,
        color: rgb(0, 0, 0),
      });

      //period from
      firstPage.drawText("01", {
        x: 398,
        y:824,
        size: 10.5,
        font: courierBold,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText("01", {
        x: 435,
        y:824,
        size: 10.5,
        font: courierBold,
        color: rgb(0, 0, 0),
      });
      // period to
      firstPage.drawText("12", {
        x: 530,
        y:824,
        size: 10.5,
        font: courierBold,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText("31", {
        x: 567,
        y:824,
        size: 10.5,
        font: courierBold,
        color: rgb(0, 0, 0),
      });

      //tin 82
      firstPage.drawText("945", {
        x: 82,
        y:795,
        size: 10.5,
        font: courierBold,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText("617", {
        x: 135,
        y:795,
        size: 10.5,
        font: courierBold,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText("052", {
        x: 186,
        y:795,
        size: 10.5,
        font: courierBold,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText("0000", {
        x: 250,
        y:795,
        size: 10.5,
        font: courierBold,
        color: rgb(0, 0, 0),
      });

      //employee name
      firstPage.drawText(props.data != undefined ? props.data.employeeName : '' , {
        x: 32,
        y:765,
        size: 10.5,
        font: courierBold,
        color: rgb(0, 0, 0),
      });

      //RDO CODE
      firstPage.drawText("127", {
        x: 269,
        y:767,
        size: 10.5,
        font: courierBold,
        color: rgb(0, 0, 0),
      });

      //Basic Salary(including the exempt P250,000 & below)
      firstPage.drawText("111,878.14", {
        x: 525,
        y:770,
        size: 10.5,
        font: courierBold,
        color: rgb(0, 0, 0),
      });

      // Registered Address
      firstPage.drawText("PUROK GEMINI LASANG DAVAO CITY", {
        x: 32,
        y:735,
        size: 10.5,
        font: courierBold,
        color: rgb(0, 0, 0),
      });

      //  Date of Birth (MM/DD/YYYY)
      firstPage.drawText("02", {
        x: 38,
        y:658,
        size: 10.5,
        font: courierBold,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText("03", {
        x: 65,
        y:658,
        size: 10.5,
        font: courierBold,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText("1991", {
        x: 99,
        y:658,
        size: 10.5,
        font: courierBold,
        color: rgb(0, 0, 0),
      });

      // 9 Statutory Minimum Wage rate per day
      firstPage.drawText("396.00", {
        x: 262,
        y:635,
        size: 10.5,
        font: courierBold,
        color: rgb(0, 0, 0),
      });

      // Statutory Minimum Wage rate per month
      firstPage.drawText("10,329.00", {
        x: 242,
        y:615,
        size: 10.5,
        font: courierBold,
        color: rgb(0, 0, 0),
      });

       //  Minimum Wage Earner (MWE) whose compensation is exempt from 
       //withholding tax and not subject to income tax
       firstPage.drawText("X", {
        x: 36,
        y:598,
        size: 10.5,
        font: courierBold,
        color: rgb(0, 0, 0),
      });

      //Part II - Employer Information (Present)
      //TIN
      firstPage.drawText("005", {
        x: 84,
        y:573,
        size: 10.5,
        font: courierBold,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText("159", {
        x: 134,
        y:573,
        size: 10.5,
        font: courierBold,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText("276", {
        x: 186,
        y:573,
        size: 10.5,
        font: courierBold,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText("0000", {
        x: 252,
        y:573,
        size: 10.5,
        font: courierBold,
        color: rgb(0, 0, 0),
      });

      // Employer's Name 
      firstPage.drawText("LUMINOUS DEVELOPMENT CORPORATION", {
        x: 32,
        y:543,
        size: 10.5,
        font: courierBold,
        color: rgb(0, 0, 0),
      });

      // 14 Registered Address

      firstPage.drawText("68 LIZADA STREET  DAVAO CITY DAVAO DEL SUR", {
        x: 32,
        y:515,
        size: 8,
        font: courierBold,
        color: rgb(0, 0, 0),
      });
 /// ZIPCODE
      firstPage.drawText("8000", {
        x: 264,
        y:518,
        size: 10.5,
        font: courierBold,
        color: rgb(0, 0, 0),
      });

      // Part IVA - Summary
      //Gross Compensation Income from PresentEmployer (Sum of Items 36 and 50)  
      firstPage.drawText("135,544.15", {
        x: 240,
        y:384,
        size: 10.5,
        font: courierBold,
        color: rgb(0, 0, 0),
      });
      //Less: Total Non-Taxable/Exempt CompensationIncome from Present Employer (From Item 36
      firstPage.drawText("135,544.15", {
        x: 240,
        y:364,
        size: 10.5,
        font: courierBold,
        color: rgb(0, 0, 0),
      });
      // Taxable Compensation Income from Present Employer (Item 19 Less Item 20) (From Item 50)
      firstPage.drawText("0.00", {
        x: 278,
        y:344,
        size: 10.5,
        font: courierBold,
        color: rgb(0, 0, 0),
      });
      // Add: Taxable Compensation Income from Previous Employer, if applicable
      firstPage.drawText("0.00", {
        x: 278,
        y:324,
        size: 10.5,
        font: courierBold,
        color: rgb(0, 0, 0),
      });
      // Gross Taxable Compensation Income(Sum of Items 21 and 22)
      firstPage.drawText("0.00", {
        x: 278,
        y:304,
        size: 10.5,
        font: courierBold,
        color: rgb(0, 0, 0),
      });

      //Tax Due
      firstPage.drawText("0.00", {
        x: 278,
        y:284,
        size: 10.5,
        font: courierBold,
        color: rgb(0, 0, 0),
      });

      //Amount of Taxes Withheld
      //25A Present Employer
      firstPage.drawText("0.00", {
        x: 278,
        y:264,
        size: 10.5,
        font: courierBold,
        color: rgb(0, 0, 0),
      });

      //25B Previous Employer, if applicable
      firstPage.drawText("0.00", {
        x: 278,
        y:244,
        size: 10.5,
        font: courierBold,
        color: rgb(0, 0, 0),
      });

    // Total Amount of Taxes Withheld as adjusted 50(Sum of Items 25A and 25B)
    firstPage.drawText("0.00", {
        x: 278,
        y:220,
        size: 10.5,
        font: courierBold,
        color: rgb(0, 0, 0),
      });

      // Present Employer/Authorized Agent Signature over Printed Name
      firstPage.drawText("MARLENE H. VALLESER", {
        x: 110,
        y:172,
        size: 10.5,
        font: courierBold,
        color: rgb(0, 0, 0),
      });
      // Employee Signature over Printed Name
      firstPage.drawText("ASTORIO JR RULIDA ABELLA", {
        x: 90,
        y:142,
        size: 10.5,
        font: courierBold,
        color: rgb(0, 0, 0),
      });

      // Present Employer/Authorized Agent Signature over Printed Name(Head of Accounting/Human Resource or Authorized Representative)
      firstPage.drawText("MARLENE H. VALLESER", {
        x: 110,
        y:60,
        size: 10.5,
        font: courierBold,
        color: rgb(0, 0, 0),
      });

      //Employee Signature over Printed Name
      firstPage.drawText("ASTORIO JR RULIDA ABELLA", {
        x: 382,
        y:40,
        size: 10.5,
        font: courierBold,
        color: rgb(0, 0, 0),
      });

      //Holiday Pay (MWE)
      firstPage.drawText("6,138.00", {
        x: 538,
        y:750,
        size: 10.5,
        font: courierBold,
        color: rgb(0, 0, 0),
      });

      //Overtime Pay (MWE)
      firstPage.drawText("0.00", {
        x: 563,
        y:730,
        size: 10.5,
        font: courierBold,
        color: rgb(0, 0, 0),
      });

      //Night Shift Differential (MWE)
      firstPage.drawText("0.00", {
        x: 563,
        y:710,
        size: 10.5,
        font: courierBold,
        color: rgb(0, 0, 0),
      });

      //Hazard Pay (MWE)
      firstPage.drawText("0.00", {
        x: 563,
        y:690,
        size: 10.5,
        font: courierBold,
        color: rgb(0, 0, 0),
      });

      //13th Month Pay and Other Benefits(maximum of P90,000)
      firstPage.drawText("9,420.51", {
        x: 538,
        y:670,
        size: 10.5,
        font: courierBold,
        color: rgb(0, 0, 0),
      });

      // De Minimis Benefits
      firstPage.drawText("0.00", {
        x: 563,
        y:650,
        size: 10.5,
        font: courierBold,
        color: rgb(0, 0, 0),
      });

      //SSS, GSIS, PHIC & PAG-IBIG Contributions and Union Dues (Employee share only)
      firstPage.drawText("8,107.50", {
        x: 538,
        y:630,
        size: 10.5,
        font: courierBold,
        color: rgb(0, 0, 0),
      });

      //Salaries and Other Forms of Compensation
      firstPage.drawText("0.00", {
        x: 563,
        y:610,
        size: 10.5,
        font: courierBold,
        color: rgb(0, 0, 0),
      });

      // Total Non-Taxable/Exempt Compensation Income (Sum of Items 27 to 35)
      firstPage.drawText("135,544.15", {
        x: 525,
        y:590,
        size: 10.5,
        font: courierBold,
        color: rgb(0, 0, 0),
      });

      //Basic Salary
      firstPage.drawText("0.00", {
        x: 563,
        y:550,
        size: 10.5,
        font: courierBold,
        color: rgb(0, 0, 0),
      });

      //Representation
      firstPage.drawText("0.00", {
        x: 563,
        y:530,
        size: 10.5,
        font: courierBold,
        color: rgb(0, 0, 0),
      });

      //Transportation
      firstPage.drawText("0.00", {
        x: 563,
        y:510,
        size: 10.5,
        font: courierBold,
        color: rgb(0, 0, 0),
      });

      //Cost of Living Allowance (COLA)
      firstPage.drawText("0.00", {
        x: 563,
        y:490,
        size: 10.5,
        font: courierBold,
        color: rgb(0, 0, 0),
      });

      //Fixed Housing Allowance
      firstPage.drawText("0.00", {
        x: 563,
        y:470,
        size: 10.5,
        font: courierBold,
        color: rgb(0, 0, 0),
      });

    //Others (specify)
    //42A
    firstPage.drawText("0.00", {
        x: 450,
        y:440,
        size: 10.5,
        font: courierBold,
        color: rgb(0, 0, 0),
      });
    firstPage.drawText("0.00", {
        x: 563,
        y:440,
        size: 10.5,
        font: courierBold,
        color: rgb(0, 0, 0),
      });
    //42b
    firstPage.drawText("0.00", {
        x: 450,
        y:420,
        size: 10.5,
        font: courierBold,
        color: rgb(0, 0, 0),
      });
    firstPage.drawText("0.00", {
        x: 563,
        y:420,
        size: 10.5,
        font: courierBold,
        color: rgb(0, 0, 0),
      });

      //Commission
      firstPage.drawText("0.00", {
        x: 563,
        y:393,
        size: 10.5,
        font: courierBold,
        color: rgb(0, 0, 0),
      });

      // Profit Sharing
      firstPage.drawText("0.00", {
        x: 563,
        y:373,
        size: 10.5,
        font: courierBold,
        color: rgb(0, 0, 0),
      });

      // Fees Including Director's Fees
      firstPage.drawText("0.00", {
        x: 563,
        y:353,
        size: 10.5,
        font: courierBold,
        color: rgb(0, 0, 0),
      });

      // axable 13th Month Benefits
      firstPage.drawText("0.00", {
        x: 563,
        y:333,
        size: 10.5,
        font: courierBold,
        color: rgb(0, 0, 0),
      });

      // Hazard Pay
      firstPage.drawText("0.00", {
        x: 563,
        y:313,
        size: 10.5,
        font: courierBold,
        color: rgb(0, 0, 0),
      });

      //Overtime Pay
      firstPage.drawText("0.00", {
        x: 563,
        y:293,
        size: 10.5,
        font: courierBold,
        color: rgb(0, 0, 0),
      });

      //49A
    firstPage.drawText("0.00", {
        x: 450,
        y:260,
        size: 10.5,
        font: courierBold,
        color: rgb(0, 0, 0),
      });
    firstPage.drawText("0.00", {
        x: 563,
        y:260,
        size: 10.5,
        font: courierBold,
        color: rgb(0, 0, 0),
      });
      
      
      //49B
    firstPage.drawText("0.00", {
        x: 450,
        y:240,
        size: 10.5,
        font: courierBold,
        color: rgb(0, 0, 0),
      });
    firstPage.drawText("0.00", {
        x: 563,
        y:240,
        size: 10.5,
        font: courierBold,
        color: rgb(0, 0, 0),
      });

      //Total Taxable Compensation Income
      firstPage.drawText("0.00", {
        x: 563,
        y:220,
        size: 10.5,
        font: courierBold,
        color: rgb(0, 0, 0),
      });









  
      const pdfBytes = await pdfDoc.save();
      const bytes  = new Uint8Array( pdfBytes ); 
const blob   = new Blob( [ bytes ], { type: "application/pdf" } );
const docUrl = URL.createObjectURL( blob );
      console.log('data', docUrl)
    //   const docUrl = URL.createObjectURL(
    //     new Blob(pdfBytes, { type: "application/pdf" })
    //   );
      setPdfInfo(docUrl);
    };

    console.log('dataPass', pdfInfo)
    
    return (
            <iframe className={classes.column} title="test-frame" src={pdfInfo} type="application/pdf" style={{width:'70%', height:600}}/>
    );
}

export default FormCom2316;
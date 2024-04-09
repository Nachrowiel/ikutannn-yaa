getBirthdayMessage();

function getBirthdayMessage() {
    let url = window.location.href;
    let regexName = new RegExp("name" + "(=([^&#]*))");
    let resultsName = regexName.exec(url);
    let regexSeg = new RegExp("seg" + "(=([^&#]*))");
    let resultsSeg = regexSeg.exec(url);

    if (resultsName == null) {
        birthdayName = "Nata";
    } else {
        birthdayName = decodeURIComponent(resultsName[2]);
    }

    if (resultsSeg == null) {
        birthdaySeg = "general";
    } else {
        birthdaySeg = decodeURIComponent(resultsSeg[2]);
    }

    if (birthdaySeg == "fundraisers") {
        document.getElementById('letter').innerHTML = "<div class='center-letter animate-reveal animate-first'> <h1>Happy Birthday!</h1><br><p style='margin: 0 10px; line-height:160%;'>APAAAAA INIII GJ BNGT BIKIN GINIAN<br><br>hiii,,mangatt yaa osn nyaa wkwkw moga loloss yaa:v klo gabisa jngn di kerjain tidur aja buat mimpiin aku😎 siapa tau nnti dapet inspirasi buat podcast najitenge:vwkwkk pokoknya mangat wee yaaa buat besok, jangan maksain jugaa tapi gapapa maksain juga tukang padang banyak di pinggir jalan tinggal beli😎 mangatt yaaa, teruss mau ngingetin satu lagii klo udh tanggal 27 tuuh 2 8 yaa? wkwkwkwwkw  udh we gitu gabut doang inimah.</p></div><div class='animate-reveal animate-second' style='margin-top: 15px;'> <a href='placeholderlink' style='margin-top: 15px; font-family: Arial; background-color: #f79420; -webkit-border-radius: 4px; border-radius: 4px; color: #ffffff; display: block; margin: 0 auto; font-size: 22px; font-weight: 700; line-height: 36px; text-align: center; text-decoration: none; width: 280px; -webkit-text-size-adjust: none;' target='_blank'>Start Fundraising</a></div>"
    } else {
        document.getElementById('letter').innerHTML = "<div><div id='center-letter' class='center-letter animate-reveal animate-first'> <h1>Happy Birthday!</h1><br><p style='margin: 0 10px;'>May this year bring you great happiness and personal growth!<br><br>May you continue to improve and be authentic, and we're grateful for the opportunity to celebrate your special day with you. Did you know that you can celebrate your birthday by giving back? Create your ourHope page today and inspire friends and family to contribute to the lifesaving research and care available only here.</p></div><div class='animate-reveal animate-second' style='margin-top: 15px;'> <a href='placeholderlink' style='font-family: Arial; background-color: #f79420; -webkit-border-radius: 4px; border-radius: 4px; color: #ffffff; display: block; margin: 0 auto; font-size: 22px; font-weight: 700; line-height: 36px; text-align: center; text-decoration: none; width: 280px; -webkit-text-size-adjust: none;' target='_blank'>Start Fundraising</a></div></div>"
    }
}
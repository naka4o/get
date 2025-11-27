async function doPost() {
    const start = new Date().toLocaleString();
    console.log(start);
    document.getElementById('start').innerHTML=start;
    document.getElementById("output").innerHTML=`    
<h3>データ送信中.. 数秒お待ちください ..</h3>
`;
// decrypto
    //const URL='https://script.google.com/macros/s/AKfycbyn3kjIYtpNr6IYXhV_04GY9e6gsTOiM090MAM1WyN9Oq--uKTJoRrcPULlTeOBEghD5A/exec';
    const URL='https://script.google.com/macros/s/AKfycbzLVksrx6uWaQsKNWyTV_as3vBmJ3FhisoGJCUv7bL_LpFPYZZyQOm02rbVMlaV173A9g/exec';
    //const param='U2FsdGVkX1%2ByVECD2yA0%2FFUPWcGfxBevTiLbQIQvgZWtXRdbgDM0%2Ft%2BmhPKyOrtO';
    try {
      /*
    const res = await fetch(URL, {
      method: 'POST',
      body: JSON.stringify({param})
    });
    */
    //const url2='https://script.google.com/macros/s/AKfycbzLVksrx6uWaQsKNWyTV_as3vBmJ3FhisoGJCUv7bL_LpFPYZZyQOm02rbVMlaV173A9g/exec';
    //const param='?param=U2FsdGVkX1%2ByVECD2yA0%2FFUPWcGfxBevTiLbQIQvgZWtXRdbgDM0%2Ft%2BmhPKyOrtO&no=1';
    // array param
    const param='?param=U2FsdGVkX191hvOM4B8UU5A5DSXSgjP0lAtiHpUqTLR2zA%2B5djgMRr8%2BdlCk2%2FzlH2fZ9n1lm4epqyW0KaN7JEHtlvXJWRD%2Bb5zVgPlgb8l4m1QLFQD4%2FoDbvkYPirTu&no=1';
    const res = await fetch(URL+param);
    console.log(res);
    const d = await res.json();
    console.log(d);
    document.getElementById('output').innerHTML =`
<h3>ご回答、ありがとうございました。</h3>
${JSON.stringify(d.nameGrad)}<br>
${JSON.stringify(d.lastOne)}
    `; 
      document.getElementById('date').value = new Date(d.lastOne.日付).toLocaleString();
      document.getElementById('name').value = d.nameGrad.name;
} catch (error) {
        console.error('エラーが発生しました:', error);
        document.getElementById('output').innerHTML = `
<strong>      
エラーが発生しました。
${error}
</strong>
`;
}
        const done = new Date().toLocaleString();
    console.log(done);
        document.getElementById('done').innerHTML=done;

}

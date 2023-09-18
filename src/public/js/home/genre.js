import axios from 'https://cdn.jsdelivr.net/npm/axios@1.5.0/+esm';

const $submitBtn = document.querySelector('.submitBtn');

$submitBtn.addEventListener('click', ()=>{
    const firstValue = document.querySelector('input[name="first"]:checked').value;
    const secondValue = document.querySelector('input[name="second"]:checked').value;
    const thirdValue = document.querySelector('input[name="third"]:checked').value;
    const fourthValue = document.querySelector('input[name="fourth"]:checked').value;
    const fifthValue = document.querySelector('input[name="fifth"]:checked').value;
    const sixthValue = document.querySelector('input[name="sixth"]:checked').value;
    const req = {
        first: firstValue,
        second: secondValue,
        third: thirdValue,
        fourth: fourthValue,
        fifth: fifthValue,
        sixth: sixthValue
      };
      console.log(req)
    axios.post('/genre',req,{
        header: {
            'Content-Type': 'application/json',
        },
    })
    .then((res)=>{
        console.log(res.data.id);
        location.href = `/result?id=${res.data.id}`
    })
})

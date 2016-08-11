function currentDay() {
	let today = new Date();
	let dd = today.getDate();
	let mm = today.getMonth()+1; 

	let yyyy = today.getFullYear();
	if(dd<10){
    	dd='0'+dd
	} 
	if(mm<10){
    	mm='0'+mm
	} 
	let todayString = dd+'/'+mm+'/'+yyyy;
	return todayString;	
}


export function getMailList() {
  let today = currentDay()
  return {
    type: "GET_MAIL_LIST",
    payload: { 
      		mailList : [
      			{
      				title: "My new theory",
      				sentBy: "Albert Einsten",
      				dateTime: today,
      			},
      			{
      				title: "The dancing universe",
      				sentBy: "Marcelo Gleiser",
      				dateTime: today,
      			},
      			{
      				title: "Europa, Calisto",
      				sentBy: "Galileu Galilei",
      				dateTime: today,
      			}
      		]
    }
  }
}
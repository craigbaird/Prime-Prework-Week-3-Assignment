function checkDay( today ){
  // use a switch check if 'today' is the weekend ('saturday' or 'sunday')
  // DAYS MUST BE IN ALL lowercase LETTERS AND FULL NAMES
  // ex: 'wednesday', not 'Wednesday' or 'wed'
  // return true if it is the weekend, false if not
  switch(today) {

  case 'monday':
    return false;
  case 'tuesday':
    return false;
  case 'wednesday':
    return false;
  case 'thursday':
    return false;
  case 'friday':
    return false;
  case 'saturday':
    return true;
  case 'sunday':
    return true;
  }
} // end checkDay
checkDay("tuesday");

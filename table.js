const timetable = document.getElementById('timetable');
const teacherSelect = document.getElementById('teacher-select');

// Timetable data
const timetableData = {
    "الاستاذة مني العسال": {
      "كل يوم ماعدا الثلاثاء و الجمعه": "الساعة 5 عصرا"
    },
    "الاستاذة ولاء العسال": {
      "كل يوم ماعدا الثلاثاء و الجمعه": "الساعة 4 عصرا"
    },

    "الاستاذة سهام محمد": {
        "كل يوم ماعدا الاثنين و الخميس": "الساعة 7 مساءا"
      },

      "الاستاذة زينب السيد": {
        "كل يوم ماعدا الجمعه": "الساعة 6 مساءا"
      },

      "الاستاذة نجلاء محمد": {
        "كل يوم ماعدا الاحد و الاثنين و الاربعاء": "الساعة 8 مساءا"
      },

      "الاستاذة مني رمضان": {
        "كل يوم ماعدا الاحد و الاثنين و الثلاثاء": "الساعة 10:30 صباحا"
      },

      "الاستاذة امنيه محمد": {
        "السبت و الثلاثاء و الخميس": "الساعة  1 الظهر"
      },

      "الاستاذة ام عبد الغني": {
        "الاثنين و الثلاثاء": "الساعة 4 عصرا"
      },

      "الاستاذة امل زغلول": {
        "كل يوم ماعدا السبت و الجمعه": "الساعة 9 مساءا"
      },

      "الاستاذة ام يونس": {
        "كل يوم ماعدا السبت و الجمعه": "الساعة 10 مساءا"
      },
    
  };

function showTeacherDays() {
  const selectedTeacher = teacherSelect.value;

  if (selectedTeacher === "") {
    timetable.textContent = ""; // Clear previous content if no teacher selected
    return;
  }

  // Clear previous timetable content
  timetable.textContent = "";

  // Extract days and subjects for the chosen teacher
  const teacherData = timetableData[selectedTeacher];

  for (const day in teacherData) {
    const subject = teacherData[day];
    const element = document.createElement('p');
    element.textContent = ` ${selectedTeacher}, ${day},  ${subject}`;
    timetable.appendChild(element);
  }
}

teacherSelect.addEventListener('change', showTeacherDays);

let volume = localStorage.getItem("skol_volume") ? parseFloat(localStorage.getItem("skol_volume")) : 0.2;
let btnText;

$(document).ready(function () {
  $("#volumeInput").val(volume * 100);
  let playOrStop = true;

  $(".audio-btn").on("click", function () {
    const audioPlayer = $(`#${$(this).data("audio")}`)[0];
    audioPlayer.volume = volume;
    if (playOrStop) {
      audioPlayer.play();
      let button = $(this);
      btnText = $(this).text();
      playOrStop = false;
      $(this).css("opacity", 0.8).html("<i class='fas fa-stop'></i>");

      audioPlayer.onended = function () {
        console.log("done");
        console.log(btnText);
        $(".audio-btn").css("opacity", 1.0);
        button.text(btnText);
      };
    } else {
      audioPlayer.pause();
      $(this).css("opacity", 1.0);
      $(this).text(btnText);
      audioPlayer.currentTime = 0;
      playOrStop = true;
    }
  });

  $("#volumeInput").on("change", function () {
    let newVolume = $(this).val() / 100;
    volume = newVolume >= 1 ? 1 : newVolume;
    localStorage.setItem("skol_volume", newVolume);
  });

  $(".fa-plus").on("click", function () {
    volume += 0.1;
    if (volume > 1.0) {
      volume = 1.0;
    }
    localStorage.setItem("skol_volume", volume);
    $("#volumeInput").val(volume * 100);
  });

  $(".fa-minus").on("click", function () {
    volume -= 0.1;
    if (volume < 0) {
      volume = 0;
    }
    localStorage.setItem("skol_volume", volume);
    $("#volumeInput").val(volume * 100);
  });

  buttonColors();
});

const buttonColors = () => {
  const buttons = $("button");
  const purple = "#4F2683";
  const yellow = "#FFC62F";
  let bgColor = yellow;
  buttons.each((index, button) => {
    bgColor = bgColor === purple ? yellow : purple;
    let textColor = bgColor === purple ? "white" : "black";
    $(button).css({ "background-color": bgColor, color: textColor });
  });
};

let volume = localStorage.getItem("skol_volume") ? parseFloat(localStorage.getItem("skol_volume")) : 0.2;

$(document).ready(function () {
  $("#volumeInput").val(volume * 100);

  $(".audio-btn").on("click", function () {
    const audioPlayer = $(`#${$(this).data("audio")}`)[0];
    audioPlayer.volume = volume;
    audioPlayer.play();
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

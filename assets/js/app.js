let volume = localStorage.getItem("skol_volume") ? parseFloat(localStorage.getItem("skol_volume")) : 0.2;

$(document).ready(function () {
  console.log(volume);
  $("#volumeInput").val(volume * 100);

  $(".audio-btn").on("click", function () {
    const audioPlayer = $(`#${$(this).data("audio")}`)[0];
    audioPlayer.volume = volume;
    audioPlayer.play();
  });

  $("#volumeInput").on("change", function () {
    let newVolume = $(this).val() / 100;
    volume = newVolume;
    console.log(newVolume);
    localStorage.setItem("skol_volume", newVolume);
  });

  $(".fa-plus").on("click", function () {
    volume += 0.1;
    console.log(volume);
    localStorage.setItem("skol_volume", volume);
    $("#volumeInput").val(volume * 100);
  });

  $(".fa-minus").on("click", function () {
    volume -= 0.1;
    console.log(volume);
    localStorage.setItem("skol_volume", volume);
    $("#volumeInput").val(volume * 100);
  });
});


      $(function () {

        var rating = 1.6;

        $(".counter").text(rating);

        $("#rateYo1").on("rateyo.init", function () { console.log("rateyo.init"); });

        $("#rateYo1").rateYo({
          rating: 3.5,
          numStars: 5,
          precision: 2,
          starWidth: "30px",
          spacing: "5px",
	  rtl: true,
          multiColor: {

            normalfill: "white",
            ratesfill : "orange"
          },
          onInit: function () {

            console.log("On Init");
          },
          onSet: function () {

            console.log("On Set");
          }
        })
		$("#rateYo2").rateYo({
          rating: rating,
          numStars: 5,
          precision: 2,
          starWidth: "30px",
          spacing: "5px",
	  rtl: true,
          multiColor: {

			normalfill: "white",
            ratesfill : "orange"
          },
          onInit: function () {

            console.log("On Init");
          },
          onSet: function () {

            console.log("On Set");
          }
        })

		$("#rateYo3").rateYo({
          rating: rating,
          numStars: 5,
          precision: 2,
          starWidth: "30px",
          spacing: "5px",
	  rtl: true,
          multiColor: {

            normalfill: "white",
            ratesfill : "orange"
          },
          onInit: function () {

            console.log("On Init");
          },
          onSet: function () {

            console.log("On Set");
          }
        })

		$("#rateYo4").rateYo({
          rating: rating,
          numStars: 5,
          precision: 2,
          starWidth: "30px",
          spacing: "5px",
	  rtl: true,
          multiColor: {

            normalfill: "white",
            ratesfill : "orange"
          },
          onInit: function () {

            console.log("On Init");
          },
          onSet: function () {

            console.log("On Set");
          }
        })
		$("#rateYo5").rateYo({
          rating: rating,
          numStars: 5,
          precision: 2,
          starWidth: "30px",
          spacing: "5px",
	  rtl: true,
          multiColor: {

			normalfill: "white",
            ratesfill : "orange"
          },
          onInit: function () {

            console.log("On Init");
          },
          onSet: function () {

            console.log("On Set");
          }
        })
		$("#rateYo6").rateYo({
          rating: rating,
          numStars: 5,
          precision: 2,
          starWidth: "30px",
          spacing: "5px",
	  rtl: true,
          multiColor: {

            normalfill: "white",
            ratesfill : "orange"
          },
          onInit: function () {

            console.log("On Init");
          },
          onSet: function () {

            console.log("On Set");
          }
        })
        .on("rateyo.set", function () { console.log("rateyo.set"); })
          .on("rateyo.change", function () { console.log("rateyo.change"); });

        $(".rateyo").rateYo();

        $(".rateyo-readonly-widg").rateYo({

          rating: rating,
          numStars: 5,
          precision: 2,
          minValue: 1,
          maxValue: 5
        }).on("rateyo.change", function (e, data) {
        
          console.log(data.rating);
        });
      });
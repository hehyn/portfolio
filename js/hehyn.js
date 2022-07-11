$("document").ready(function(){

    
    let pro_chk = false;

    function pro(id, per){
        let bar = new ProgressBar.Line(id,{
            strokeWidth: 4,
            duration: 1400,
            color : "pink",
            trailWidth: 4
        })
        bar.animate(per)
    }
    
    let Fullpage = new fullpage(".fullpage",{
        // sectionsColor : ["skyblue", "#ddd","#aea","#ddd","#aaa"],
        anchors: ["home","about","web","graphic","contact"],
        licenseKey:"603D3EBB-D1B84561-B40D98B6-7A87C3D7",
        responsiveWidth:1100,
        normalScrollElements: ".window-content",
        navigation: true,
        navigationPosition: "right", //left쓰면 왼쪽으로감
        navigationTooltips: ["홈","소개","웹","그래픽","연락처"],
        slidesNavigation: true,
        afterLoad: function(origin, destination){
            $(".nav ul li").removeClass("on").eq(destination.index).addClass("on")
            if(destination.index > 0){
                $(".nav").fadeIn()
            }else{
                $(".nav").fadeOut()
            }

            if(destination.index == 1){
                if(pro_chk == true){
                    return
                }
                pro("#pro1", 0.85)
                pro("#pro2", 0.85)
                pro("#pro3", 0.8)
                pro("#pro4", 0.7)
                pro("#pro5", 0.5)
                pro_chk = true
            }
            // 0.85 0.85 0.8 0.7 0.5
        },
        afterSlideLoad: function(section, origin, destination){
            let params = {
                section: section,
                origin : origin,
                destination : destination
            }
        }
    })

    let typed = new Typed("#typed1",{
        stringsElement: "#typed",
        typeSpeed: 100,
        loop: true,
        backSpeed: 50,
        cursorChar: "_"
    })



    // let bar = new ProgressBar.Line("#pro1",{
    //     strokeWidth: 6,
    //     color : "#edbcd8", 
    //     trailColor: "#e1e1e1",
    //     duration: 2000,
    //     trailWidth: 6, 
    // })
    // bar.animate(0.85)

    // let bar2 = new ProgressBar.Line("#pro2",{
    //     strokeWidth: 6,
    //     color : "#edbcd8", 
    //     trailColor: "#e1e1e1",
    //     duration: 2000,
    //     trailWidth: 6, 
    // })
    // bar2.animate(0.85)
    // let bar3 = new ProgressBar.Line("#pro3",{
    //     strokeWidth: 6,
    //     color : "#edbcd8", 
    //     trailColor: "#e1e1e1",
    //     duration: 2000,
    //     trailWidth: 6, 
    // })
    // bar3.animate(0.8)
    // let bar4 = new ProgressBar.Line("#pro4",{
    //     strokeWidth: 6,
    //     color : "#edbcd8", 
    //     trailColor: "#e1e1e1",
    //     duration: 2000,
    //     trailWidth: 6, 
    // })
    // bar4.animate(0.7)
    // let bar5 = new ProgressBar.Line("#pro5",{
    //     strokeWidth: 6,
    //     color : "#edbcd8", 
    //     trailColor: "#e1e1e1",
    //     duration: 2000,
    //     trailWidth: 6, 
    // })
    // bar5.animate(0.5)
    
    let content_img = [
        "images/hehyn/gr2.png",
        "images/hehyn/gr1.png",
        "images/hehyn/gr3.png",
        "images/hehyn/gr4.png",
        "images/hehyn/gr5.png",
        "images/hehyn/gr6.png"
    ]
    
    $(".graphic .content .content-wrap a").click(function(){ //(1)
        
        let content_index = $(this).index(); //(2)
        
        $(".window").slideDown(); //(3)
        $(".window-content").slideDown(); //(4)
        $(".window-content img").attr("src", content_img[content_index])
        
    })

    $(".window-content span").click(function(){
        $(".window-content").slideUp();
    })



})
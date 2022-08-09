<template>
    <div class="container">
        <h1>About Me</h1>
        <div class="row">
            <div class="slide-top">
                <div class="content">
                    <div class="images">
                        <img src="@/assets/image/avatar1.jpg" alt="" />
                        <img src="@/assets/image/avatar2.jpg" alt="" />
                        <img src="@/assets/image/avatar3.jpg" alt="" />
                        <img src="@/assets/image/avatar4.jpg" alt="" />
                    </div>

                    <div onclick="side_slide(-1)" class="slide left">
                        <span class="fa-solid fa-angle-left"></span>
                    </div>
                    <div onclick="side_slide(1)" class="slide right">
                        <span class="fa-solid fa-angle-right"></span>
                    </div>

                    <div class="btm-sliders">
                        <span onclick="btm_slide(1)"></span>
                        <span onclick="btm_slide(2)"></span>
                        <span onclick="btm_slide(3)"></span>
                        <span onclick="btm_slide(4)"></span>
                    </div>
                </div>
            </div>
            <div class="text-info">
                <h1><b>PANUWAT </b>PHUAKROONGRUENG</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad perferendis eum consequuntur dicta illo,
                    excepturi quaerat eligendi quam voluptates corporis odit quisquam, accusamus dolorem, iure iste
                    vitae. Expedita ipsa, repudiandae at similique nulla voluptatem, odit saepe adipisci alias nesciunt
                    nihil.</p>
                <hr>
                <h3><i class="fa-brands fa-line fa-xl"></i> : beampanuwat</h3>
                <h3><i class="fa-solid fa-phone fa-xl"></i> : 0863867164</h3>
                <h2></h2>
            </div>
        </div>
    </div>
</template>

<script>

export default {};
</script>

<style lang="scss" scoped>
@import '@/sass/main.scss';

.container {
    box-sizing: border-box;

    .row {
        display: flex;
    }

    .text-info {
        width: 100%;
        height: 500px;
        margin: 0 30px 0 0;
        padding: 30px;
        background: $white-color;
        border-radius: 20px;
        text-align: center;

        h1 {
            font-size: 30px;
        }

        hr {
            @include BarCut;
        }

        h3 {
            margin: 20px 0 20px 0;
            align-items: center;
        }

        b {
            color: $white-color;
            background-color: rgba(255, 0, 0, 0.5);
            @include HoverText;
        }
    }

    p {
        font-size: 18px;
    }
}

.slide-top {
    display: flex;
    justify-content: center;
    text-align: center;
    margin: auto auto 50px auto;
    width: 100%;

    hr {
        background-color: #fff;
        border-top: 5px dashed #8c8b8b;
    }

    .content {
        height: 750px; // กำหนด display ของ content
        width: 800px; // กำหนด display ของ content
        overflow: hidden;
        position: relative;

        .images {
            height: 100%;
            width: 100%;

            img {
                max-width: 100%;
            }
        }

        .btm-sliders {
            position: absolute;
            bottom: 20px;
            left: 50%;
            display: flex;
            transform: translateX(-50%);

            span {
                height: 5px;
                width: 40px;
                background: $white-color;
                margin: 0 6px;
                cursor: pointer;

                &:hover {
                    background: $success-color;
                }
            }
        }

        .slide {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            border: solid 2px white;
            margin: 10px;
            background: rgba(255, 255, 255, 0.2);
            padding: 5px 10px;
            cursor: pointer;

            &:hover {
                background: rgba(99, 99, 99, 0.8);
            }

            span {
                font-size: 38px;
                color: white;
            }
        }

        .right {
            right: 0;
        }
    }
}

h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px 0 30px 0;
    font-size: 50px;
    font-weight: bold;

}

///////////// 760px ////////////////////////////
@media screen and (max-width: 760px) {
    .container {
        max-width: 100%;
    }

    .btm-sliders {
        span {
            display: none;
        }
    }

    .slide {
        border: solid 3px white !important;
        padding: 15px 30px !important;
        top: 20%;
        transform: translateY(-20%) !important;

        span {
            font-size: 35px !important;
        }
    }
}

///////////// 457px /////////////////////////////////
@media screen and (max-width: 457px) {
    .slide {
        border: solid 3px white !important;
        padding: 15px 30px !important;
        top: 25% !important;

        span {
            font-size: 35px !important;
        }
    }
}

@media screen and (max-width: 1674px) {
    .container {
        display: flex;
        flex-direction: column;

        .row {
            flex-direction: column;

            .text-info {
                h1 {
                    display: flex;
                    flex-direction: column;
                    font-size: 24px;

                    b {
                        font-size: 20px;
                    }
                }
            }
        }
    }
}
</style>
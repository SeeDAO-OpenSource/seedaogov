<template>
    <div class="layout-px-spacing">
        <portal to="breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Pages</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Profile</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </portal>

        <div class="coming-soon">
            <div class="coming-soon-container">
                <div class="coming-soon-cont">
                    <div class="coming-soon-wrap">
                        <div class="coming-soon-container">
                            <div class="coming-soon-content">
                                <h4 class="">Coming Soon</h4>
                                <p class="">We will be here in a shortwhile.....</p>

                                <div id="timer">
                                    <div class="days">
                                        <span class="count">{{ days ? days : '--' }}</span> <span class="text">Days</span>
                                    </div>
                                    <div class="hours">
                                        <span class="count">{{ hours ? hours : '--' }}</span> <span class="text">Hours</span>
                                    </div>
                                    <div class="min">
                                        <span class="count">{{ minutes ? minutes : '--' }}</span> <span class="text">Mins</span>
                                    </div>
                                    <div class="sec">
                                        <span class="count">{{ seconds ? seconds : '--' }}</span> <span class="text">Secs</span>
                                    </div>
                                </div>

                                <h3>Subscribe to get notified!</h3>

                                <b-form class="text-left">
                                    <div class="coming-soon">
                                        <div class="">
                                            <div id="email-field" class="field-wrapper input">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    class="feather feather-at-sign"
                                                >
                                                    <circle cx="12" cy="12" r="4"></circle>
                                                    <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
                                                </svg>
                                                <b-input type="email" placeholder="Email"></b-input>
                                                <b-button type="submit" variant="primary">Subscribe</b-button>
                                            </div>
                                        </div>
                                    </div>
                                </b-form>

                                <ul class="social list-inline">
                                    <li class="list-inline-item">
                                        <a class="" href=""
                                            ><svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="feather feather-linkedin"
                                            >
                                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                                <rect x="2" y="9" width="4" height="12"></rect>
                                                <circle cx="4" cy="4" r="2"></circle></svg
                                        ></a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a class="" href=""
                                            ><svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="feather feather-facebook"
                                            >
                                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg
                                        ></a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a class="" href=""
                                            ><svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="feather feather-twitter"
                                            >
                                                <path
                                                    d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                                                ></path></svg
                                        ></a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a class="" href=""
                                            ><svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="feather feather-github"
                                            >
                                                <path
                                                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                                                ></path></svg
                                        ></a>
                                    </li>
                                </ul>

                                <p class="terms-conditions">
                                    © 2021 All Rights Reserved. <router-link to="/">CORK</router-link> is a product of SeeDAO. <a href="javascript:void(0);">Cookie Preferences</a>,
                                    <a href="javascript:void(0);">Privacy</a>, and <a href="javascript:void(0);">Terms</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="coming-soon-image">
                    <div class="l-image">
                        <div class="img-content">
                            <img src="@/assets/images/mindset.svg" alt="coming_soon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import '@/assets/sass/pages/coming-soon/style.scss';
    export default {
        metaInfo: { title: 'Comming Soon' },
        data() {
            return {
                days: null,
                hours: null,
                minutes: null,
                seconds: null
            };
        },
        mounted() {
            this.set_timer();
        },
        methods: {
            set_timer() {
                // Set the date we're counting down to
                let getYear = new Date().getFullYear() + 1;
                let countDownDate = new Date('Dec 5, ' + getYear + ' 15:37:25').getTime();

                // Update the count down every 1 second
                let countdownfunction = setInterval(() => {
                    // Get todays date and time
                    let now = new Date().getTime();

                    // Find the distance between now an the count down date
                    let distance = countDownDate - now;

                    // Time calculations for days, hours, minutes and seconds
                    this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
                    this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    this.seconds = Math.floor((distance % (1000 * 60)) / 1000);

                    // If the count down is over, write some text
                    if (distance < 0) {
                        clearInterval(countdownfunction);
                        document.getElementById('timer').innerHTML = 'EXPIRED';
                    }
                }, 1000);
            }
        }
    };
</script>

<template>
    <div class="form full-form auth-cover">
        <div class="form-container">
            <div class="form-form">
                <div class="form-form-wrap">
                    <div class="form-container">
                        <div class="form-content">
                            <div class="d-flex user-meta">
                                <img src="@/assets/images/profile-7.jpeg" class="usr-profile" alt="avatar" />
                                <div class="">
                                    <p class="">Shaun Park</p>
                                </div>
                            </div>

                            <b-form class="text-left">
                                <div class="form">
                                    <div id="password-field" class="field-wrapper input mb-2">
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
                                            class="feather feather-lock"
                                        >
                                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                        </svg>
                                        <b-input type="password" placeholder="Password"></b-input>
                                    </div>
                                    <div class="d-sm-flex justify-content-between">
                                        <div class="field-wrapper toggle-pass d-flex align-items-center">
                                            <p class="d-inline-block">Show Password</p>
                                            <b-checkbox switch class="switch s-primary"></b-checkbox>
                                        </div>
                                        <div class="field-wrapper">
                                            <b-button type="submit" variant="primary">Unlock</b-button>
                                        </div>
                                    </div>
                                </div>
                            </b-form>
                            <p class="terms-conditions">
                                © 2020 All Rights Reserved. <router-link to="/">CORK</router-link> is a product of SeeDAO. <a href="javascript:void(0);">Cookie Preferences</a>,
                                <a href="javascript:void(0);">Privacy</a>, and <a href="javascript:void(0);">Terms</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-image">
                <div class="l-image"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import '@/assets/sass/authentication/auth.scss';
    export default {
        metaInfo: { title: 'Lockscreen Cover' },
        mounted() {},
        methods: {}
    };
</script>

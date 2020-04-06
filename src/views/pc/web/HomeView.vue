<template>
    <div>
        <div class="block">
            <h2 class="center">{{banner}}</h2>
            <br/>
            <h4>Google フォトなら、高画質の写真を無料で、無制限に保存できます。
                一般社团法人日中AI•IoT产业联盟（简称JCAIoT），受日本政府认可，携手中国和日本的Al·loT各领域的伙伴，
                着眼于中日优势互补，促进中日技术与产业化交流与合作，力争在中日之间打造一个更广泛的，
                国际性的物联网与人工智能的技术与市场交流的平台，让更多的企业和个人了解Al·loT并参与该领域的创新与合作，
                最终能够在Al·loT领域形成中日互相促进、共同发展的崭新局面。本联盟于2016年1月在日本东京成立，经过2年多的努力，
                会员达300余位，其中，企业为100多家，涵盖了机器人，大数据，区块链，智慧工业，通信，金融，交通，农业，物流，医疗养老大健康，
                安全等等众多细分领域；其他成员为各个领域的技术精英或专家学者。两年来，我们举办了多次专业性和针对性较强的交流活动，
                新技术新商业模式让大家耳目一新，并且实现了数个领域的项目对接，得到了在日华人，日本学术界和企业界的积极认可，
                与数家日本本土物联网和人工智能的协会取得了良好的互动和信赖关系。作为中日间纽带，
                2017年与中国最大的中关村物联网产业联盟在北京和东京进行多次面对面的交流，成为其在日本的唯一的全面战略合作伙伴
                。技术人才汇聚，专业公司云集是本连盟的最主要特点。2018年，我们的目标是计划再吸收100家日本企业并做好相应服务。
                我们要继续以促进中日间Al·loT领域的技术协作创新、产业合作发展，联盟做实做強为基本目标，顺应时代技术潮流变化，让日中Al·loT产业联盟更上一个台阶。
            </h4>
        </div>
        <div class="block">
            <h3>最新信息</h3>
            <br/>
            <div class="post-card-list">
                <HomePostCard></HomePostCard>
                <HomePostCard></HomePostCard>
                <HomePostCard></HomePostCard>
            </div>
            <br/>
            <div class="center">
                <v-btn class="ma-lg-12 post-more-button" outlined color="teal">更多信息</v-btn>
            </div>
        </div>

        <div class="block">
            <h3>加入我们</h3>
            <div class="join-us-div">
                <v-img class="join-us-item" src="https://picsum.photos/510/300?random" aspect-ratio="1.7"></v-img>
                <div class="join-us-item">
                    <JoinUsForm></JoinUsForm>
                </div>

            </div>

        </div>
        <h4> 地址：〒163-0222 東京都新宿区西新宿2-6-1新宿住友ビル22F</h4>
        <h4> 加入会员：微信 jinliu0130</h4>
        <h4>会刊公众号： 日本AI•IoT最前线(每周更新)</h4>
    </div>
</template>

<script>
    import HomePostCard from "../../../components/pc/web/HomePostCard";
    import JoinUsForm from "../../../components/pc/web/JoinUsForm";

    export default {
        components: {JoinUsForm, HomePostCard},
        props: {
            source: String
        },
        data: () => ({
            banner: null
        }),
        created() {
            this.getBanner();
        },
        methods: {
            getBanner: function () {
                let lang = this.$store.state.message.lang;
                this.$api.banner.selectBanner(lang).then(res => {
                    console.log(res);
                    this.banner = res.data.banner;
                });
            }
        },
        watch: {
            "$route.path": "getBanner"
        }
    };
</script>

<style scoped>
    .block {
        margin-left: 2%;
        margin-right: 2%;
        margin-top: 1%;
        margin-bottom: 1%;
        padding: 1%;
    }

    .center {
        text-align: center;
        margin: 0 auto;
    }

    .post-card-list {
        display: flex;
        flex-direction: row;
    }

    .join-us-div {
        display: flex;
        flex-direction: row;
    }

    .join-us-item {
        flex-grow: 1; /* default 0 */
        margin: 2%;
    }

    .post-more-button {
        width: 15%;
    }

</style>

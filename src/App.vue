<template>
  <div class="d-flex justify-content-center align-items-center" style="height: 100vh">
    <div class="card w-50" v-if="page === 1">
      <div class="card-header">朝会</div>
      <div class="card-body">
        <p>
          チケット確認 Notion<br/>
          <a href="https://www.notion.so/1763159a7ca1809bb23bcb753548cd34" target="_blank">https://www.notion.so/1763159a7ca1809bb23bcb753548cd34</a>
        </p>
        <p>
          設定 スプレッドシート<br/>
          <a href="https://docs.google.com/spreadsheets/d/1AB2-Z7k3JQf8yGnk74SofcnXCDQVowOCXNKqqoPVGus/edit#gid=508960181"
             target="_blank">https://docs.google.com/spreadsheets/d/1AB2-Z7k3JQf8yGnk74SofcnXCDQVowOCXNKqqoPVGus/edit#gid=508960181</a>
        </p>
      </div>
      <div class="card-footer text-end">
        <button @click="prevPage" type="button" class="btn">前のページ</button>
        <button @click="nextPage" type="button" class="btn">次のページ</button>
      </div>
    </div>
    <div class="card w-50" v-if="page === 2">
      <div class="card-header">① 当日期限のチケット確認</div>
      <div class="card-body">
        <p>
          <a target="_blank" :href="getTodayTasksUrl">チケットURL</a>
        </p>
        <ul>
          <li>当日期限に設定しているチケットが多い人はいるか（5枚以上持っているなど）</li>
          <li>お客様から緊急のチケットが来ているか</li>
          <li>担当者未設定で当日期限のチケットが切られているか</li>
        </ul>
      </div>
      <div class="card-footer text-end">
        <button @click="prevPage" type="button" class="btn">前のページ</button>
        <button @click="nextPage" type="button" class="btn">次のページ</button>
      </div>
    </div>
    <div class="card w-50" v-if="page === 3">
      <div class="card-header">② 期限切れのチケット確認</div>
      <div class="card-body">
        <p>
          <a target="_blank" :href="overdueTasksUrl">チケットURL</a>
        </p>
        <ul>
          <li>担当者でソートした時にたくさんチケット持っている人はいるか</li>
          <li>お客様登録で担当者がバルールのチケットがあるか</li>
          <ul>
            <li>お客様からチケット切られているのに期限切れは良くない</li>
          </ul>
        </ul>
      </div>
      <div class="card-footer text-end">
        <button @click="prevPage" type="button" class="btn">前のページ</button>
        <button @click="nextPage" type="button" class="btn">次のページ</button>
      </div>
    </div>
    <div class="card w-50" v-if="page === 4">
      <div class="card-header">③ 前営業日作成のチケット確認</div>
      <div class="card-body">
        <p>
          <a target="_blank" :href="previousBusinessDayTasksUrl">チケットURL</a>
        </p>
        <ul>
          <li>お客様が登録しているチケットがあるか</li>
          <li>新たに作成したチケットに担当者、期限日が入っているか</li>
          <li>タイトルに内容が分からない雑なタイトルが入っているチケットがあるか</li>
        </ul>
      </div>
      <div class="card-footer text-end">
        <button @click="prevPage" type="button" class="btn">前のページ</button>
        <button @click="nextPage" type="button" class="btn">次のページ</button>
      </div>
    </div>
    <div class="card w-50" v-if="page === 5">
      <div class="card-header">④ 全体状況確認 ※月曜のみ確認</div>
      <div class="card-body">
        <p>
<!--          <a href="https://kato0406.github.io/bot_asa_view_vue" target="_blank">チケット集計ツール君</a><br/>-->
<!--          全体のチケット状況を見て違和感のある所を司会者が指摘-->
<!--          例) ○さんの担当チケットが多い、○さんの期限切れチケットが多いなど-->
          チケット集計ツール君<br />
          ※整備中
        </p>
        <p>
          <a :href="completeTasksUrl" target="_blank">処理済みチケットURL</a><br/>
          処理済確認は更新日でソートする
          <ul>
            <li>お客様が長期間保持しているチケットがあるか</li>
            <ul>
              <li>なるべく一ヵ月以内でクローズしたい</li>
            </ul>
            <li>開発完了後、処理済のままクローズしていないチケットはあるか</li>
          </ul>
        </p>
        <p>
          <a href="https://docs.google.com/spreadsheets/d/13F7JiilPWd-gsVlIoX-oRbpqM2edaoSzYGB7JECElOY/edit#gid=2080367252プレビュー
https://valeur.backlog.jp/alias/wiki/1247821" target="_blank">勉強会URL</a><br/>
        </p>
      </div>
      <div class="card-footer text-end">
        <button @click="prevPage" type="button" class="btn">前のページ</button>
        <button @click="nextPage" type="button" class="btn">次のページ</button>
      </div>
    </div>
    <div class="card w-50" v-if="page === 6">
      <div class="card-header">⑤ slackエラーチケット確認 ※金曜のみ確認</div>
      <div class="card-body">
        <p>
          <a target="_blank" :href="slackTasksUrl">チケットURL</a>
        </p>
      </div>
      <div class="card-footer text-end">
        <button @click="prevPage" type="button" class="btn">前のページ</button>
        <button @click="nextPage" type="button" class="btn">次のページ</button>
      </div>
    </div>
    <div class="card w-50" v-if="page === 7">
      <div class="card-header">⑥ 出席確認</div>
      <div class="card-body">
        <p>
          <a href="https://docs.google.com/spreadsheets/d/1SunBnF6VW01kVOve5EFyxIBU69G0cMOetKqyUcGXVGw/edit#gid=0"
             target="_blank">https://docs.google.com/spreadsheets/d/1SunBnF6VW01kVOve5EFyxIBU69G0cMOetKqyUcGXVGw/edit#gid=0</a>
        </p>
        <p>
          出席確認をしましょう<br>
          欠席者がいる場合は下記のシートに⚪︎を入れてください<br>
        </p>
      </div>
      <div class="card-footer text-end">
        <button @click="prevPage" type="button" class="btn">前のページ</button>
        <button @click="nextPage" type="button" class="btn">次のページ</button>
      </div>
    </div>
    <div class="card w-50" v-if="page === 8">
      <div class="card-header">⑦ 全体確認</div>
      <div class="card-body">
        <p>何か確認ある方はいますか</p>
      </div>
      <div class="card-footer text-end">
        <button @click="prevPage" type="button" class="btn">前のページ</button>
        <button @click="nextPage" type="button" class="btn">次のページ</button>
      </div>
    </div>
    <div class="card w-50" v-if="page === 9">
      <div class="card-header">⑧ 運動</div>
      <div class="card-body">
        <p>運動動画の共有</p>
        <p>
          タブで共有してください<br/>
          <a :href="getYoutubeUrl" target="_blank">{{ getYoutubeUrl }}</a>
        </p>
      </div>
      <div class="card-footer text-end">
        <button @click="prevPage" type="button" class="btn">前のページ</button>
        <button @click="nextPage" type="button" class="btn">次のページ</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import dayjs from "dayjs";
import {computed, ref} from "vue";

const query = new URLSearchParams(window.location.search);

const page = ref(Number(query.get('page') ?? 1))
const completeTasksUrl = ref()

const nextPage = () => {
  const url = new URL(window.location.href);

  if (page.value === 9) {
    page.value = 1
    url.searchParams.set('page', page.value.toString());
    window.history.pushState({}, '', url.href);

    return
  }

  page.value = page.value + 1
  url.searchParams.set('page', page.value.toString());
  window.history.pushState({}, '', url.href);
}

const prevPage = () => {
  const url = new URL(window.location.href);

  if (page.value === 1) {
    page.value = 9
    url.searchParams.set('page', page.value.toString());
    window.history.pushState({}, '', url.href);

    return
  }

  page.value = page.value - 1
  url.searchParams.set('page', page.value.toString());
  window.history.pushState({}, '', url.href);
}

const getYoutubeUrl = computed(() => {
  const date = dayjs()

  switch (date.day()) {
    case 1:
      return 'https://youtu.be/GVATVOtwmu0'
    case 2:
      return 'https://youtu.be/NLQLuMmncHE'
    case 3:
      return 'https://youtu.be/sl0cTmNEZGM'
    case 4:
      return 'https://youtu.be/GVATVOtwmu0'
    case 5:
      return 'https://youtu.be/NLQLuMmncHE'
    default:
      return 'https://youtu.be/sl0cTmNEZGM'
  }
})

const projectIds = [
  48115, 90404, 92327, 104575, 106799, 107506, 111843, 111905, 125699, 127836,
  139380, 143275, 154956, 162798, 164065, 181478, 182111, 193241, 198448, 200798,
  213127, 215551, 219378, 219435, 220231, 223194, 127937,
]

const statusIds = [
  1, 31202, 31205, 31211, 31213, 31215, 31220, 31229, 31231, 31235, 32747,
  43839, 43848, 48521, 50223, 51607, 61831, 63448, 66707, 66763, 67570, 70106,
  2, 23368, 66764, 25086, 25088, 6742, 11614, 12560,
  12586, 25109, 38629, 25110,
  31217, 25107, 25108, 25148, 16364, 31203, 53166,
]

const baseQuery = [
  ...projectIds.map(id => `projectId=${id}`),
  'simpleSearch=false',
  'sort=ASSIGNER',
  'startDate.unspecified=false',
  ...statusIds.map(id => `statusId=${id}`),
].join('&');

const getTodayTasksUrl = computed(() => {
  const today = dayjs().format('YYYY/MM/DD')

  return `https://valeur.backlog.jp/FindIssueAllOver.action?allOver=true&limit=20&limitDate.unspecified=false&limitDateRange.begin=${today}&limitDateRange.end=${today}&offset=0&order=true&${baseQuery}`
});

const overdueTasksUrl = computed(() => {
  const yesterday = dayjs().subtract(1, 'd').format('YYYY/MM/DD')

  return `https://valeur.backlog.jp/FindIssueAllOver.action?allOver=true&limit=20&limitDate.unspecified=false&limitDateRange.end=${yesterday}&offset=0&order=true&${baseQuery}`
})

const previousBusinessDayTasksUrl = computed(() => {
  const today = dayjs().format('YYYY/MM/DD')
  const yesterday = dayjs().subtract(1, 'd').format('YYYY/MM/DD')
  const threeDaysAgo = dayjs().subtract(3, 'd').format('YYYY/MM/DD')

  return `https://valeur.backlog.jp/FindIssueAllOver.action?allOver=true&createdRange.begin=${dayjs().day() === 1 ? threeDaysAgo : yesterday}&createdRange.end=${today}&limit=20&limitDate.unspecified=false&offset=0&order=true&${baseQuery}`
})

const slackTasksUrl = computed(() => {
  return `https://valeur.backlog.jp/FindIssueAllOver.action?allOver=true&limit=20&limitDate.unspecified=false&offset=0&order=true&query=slack%E3%82%A8%E3%83%A9%E3%83%BC&${baseQuery}`
})
</script>

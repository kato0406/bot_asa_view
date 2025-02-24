<template>
  <div class="d-flex justify-content-center align-items-center" style="height: 100vh">
    <div class="card w-50" v-if="page === 1">
      <div class="card-header">朝会</div>
      <div class="card-body">
        <p>
          チケット確認 Notion<br />
          <a href="https://www.notion.so/1763159a7ca1809bb23bcb753548cd34" target="_blank">https://www.notion.so/1763159a7ca1809bb23bcb753548cd34</a>
        </p>
        <p>
          設定 スプレッドシート<br />
          <a href="https://docs.google.com/spreadsheets/d/1AB2-Z7k3JQf8yGnk74SofcnXCDQVowOCXNKqqoPVGus/edit#gid=508960181" target="_blank">https://docs.google.com/spreadsheets/d/1AB2-Z7k3JQf8yGnk74SofcnXCDQVowOCXNKqqoPVGus/edit#gid=508960181</a>
        </p>
      </div>
      <div class="card-footer text-end">
        <button @click="prevPage" type="button" class="btn">前のページ</button>
        <button @click="nextPage" type="button" class="btn">次のページ</button>
      </div>
    </div>
    <div class="card w-50" v-if="page === 2">
      <div class="card-header">① 出席確認</div>
      <div class="card-body">
        <p>
          <a href="https://docs.google.com/spreadsheets/d/1SunBnF6VW01kVOve5EFyxIBU69G0cMOetKqyUcGXVGw/edit#gid=0" target="_blank">https://docs.google.com/spreadsheets/d/1SunBnF6VW01kVOve5EFyxIBU69G0cMOetKqyUcGXVGw/edit#gid=0</a>
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
    <div class="card w-50" v-if="page === 3">
      <div class="card-header">② 当日期限のチケット確認</div>
      <div class="card-body">
        <p>
          <a :href="today_tasks_url" target="_blank">チケットURL</a><br>
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
    <div class="card w-50" v-if="page === 4">
      <div class="card-header">③ 期限切れのチケット確認</div>
      <div class="card-body">
        <p>
          <a :href="overdue_tasks_url" target="_blank">チケットURL</a>
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
    <div class="card w-50" v-if="page === 5">
      <div class="card-header">④ 前営業日作成のチケット確認</div>
      <div class="card-body">
        <p>
          <a :href="previous_business_day_tasks_url" target="_blank">チケットURL</a>
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
    <div class="card w-50" v-if="page === 6">
      <div class="card-header">⑤ 全体状況確認 ※月曜のみ確認</div>
      <div class="card-body">
        <p>
          <a href="https://kato0406.github.io/bot_asa_view_vue" target="_blank">チケット集計ツール君</a><br />
          全体のチケット状況を見て違和感のある所を司会者が指摘
          例) ○さんの担当チケットが多い、○さんの期限切れチケットが多いなど
        </p>
        <p>
          <a :href="complete_tasks_url" target="_blank">処理済みチケットURL</a><br />
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
https://valeur.backlog.jp/alias/wiki/1247821" target="_blank">勉強会URL</a><br />
        </p>
      </div>
      <div class="card-footer text-end">
        <button @click="prevPage" type="button" class="btn">前のページ</button>
        <button @click="nextPage" type="button" class="btn">次のページ</button>
      </div>
    </div>
    <div class="card w-50" v-if="page === 7">
      <div class="card-header">⑥ 全体確認</div>
      <div class="card-body">
        <p>何か確認ある方はいますか</p>
      </div>
      <div class="card-footer text-end">
        <button @click="prevPage" type="button" class="btn">前のページ</button>
        <button @click="nextPage" type="button" class="btn">次のページ</button>
      </div>
    </div>
    <div class="card w-50" v-if="page === 8">
      <div class="card-header">⑦ 運動</div>
      <div class="card-body">
        <p>運動動画の共有</p>
        <p>
          タブで共有してください<br />
          <a :href="youtubeUrl" target="_blank">{{ youtubeUrl }}</a>
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
import axios from "axios";
import dayjs from "dayjs";
import {ref} from "vue";

const query = new URLSearchParams(window.location.search);

const page = ref(Number(query.get('page') ?? 1))
const today_tasks_url = ref()
const overdue_tasks_url = ref()
const previous_business_day_tasks_url = ref()
const complete_tasks_url = ref()
const youtubeUrl = ref('https://www.youtube.com/embed/G6IR5nziFvI?start=4&end=255&autoplay=1')
const backlog_url = 'https://valeur.backlog.jp/FindIssueAllOver.action?sort=LIMIT_DATE&order=false&simpleSearch=false&allOver=true&startDate.unspecified=false&limitDate.unspecified=false&';
const base_api_sheet_url = 'https://sheets.googleapis.com/v4/spreadsheets/1AB2-Z7k3JQf8yGnk74SofcnXCDQVowOCXNKqqoPVGus/values/?sheet!?range?key=AIzaSyBhzOrlCWAfu2nBXzE6-YMbk4ktEE8Fbx4';

const generateGetSheetUrl = (sheet, range) => {
  return base_api_sheet_url.replace('?sheet', sheet).replace('?range', range)
}

const generateBaseBacklogUrl = async () => {
  const statusValues = (await axios.get(generateGetSheetUrl('URL', 'E2:G1000'))).data.values
  const projectValues = (await axios.get(generateGetSheetUrl('URL', 'A2:C1000'))).data.values
  const statusIds = []
  const projectIds = []
  const completeStatusIds = []

  for (const status of statusValues) {
    if (status[2] === '0') {
      completeStatusIds.push(status[0])
    } else {
      statusIds.push(status[0])
    }
  }

  for (const project of projectValues) {
    if (project[2] === '0') continue

    projectIds.push(project[0])
  }

  return {
    url: `${backlog_url}${projectIds.map(id => `projectId=${id}&`).join('')}${statusIds.map(id => `statusId=${id}&`).join('')}`,
    mondayUrl: `${backlog_url}${projectIds.map(id => `projectId=${id}&`).join('')}${completeStatusIds.map(id => `statusId=${id}&`).join('')}`
  }
}

const nextPage = () => {
  const url = new URL(window.location.href);

  if (page.value === 8) {
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
    page.value = 8
    url.searchParams.set('page', page.value.toString());
    window.history.pushState({}, '', url.href);

    return
  }

  page.value = page.value - 1
  url.searchParams.set('page', page.value.toString());
  window.history.pushState({}, '', url.href);
}

(async () => {
  const base = await generateBaseBacklogUrl()
  const url = base.url
  const mondayUrl = base.mondayUrl
  const date = dayjs()
  const today = dayjs().format('YYYY/MM/DD')
  const yesterday = date.subtract(1, 'd').format('YYYY/MM/DD')
  const threeDaysAgo = date.subtract(3, 'd').format('YYYY/MM/DD')

  today_tasks_url.value = `${url}limitDateRange.begin=${today}&limitDateRange.end=${today}`
  overdue_tasks_url.value = `${url}limitDateRange.end=${yesterday}`
  previous_business_day_tasks_url.value = `${url}createdRange.begin=${dayjs().day() === 1 ? threeDaysAgo : yesterday}&createdRange.end=${today}`
  complete_tasks_url.value = mondayUrl

  switch (date.day()) {
    case 1:
      youtubeUrl.value = 'https://www.youtube.com/embed/G6IR5nziFvI?start=4&end=255&autoplay=1'
      break;
    case 2:
      youtubeUrl.value = 'https://www.youtube.com/embed/yM14vLOHJco?start=7&end=264&autoplay=1'
      break
    case 3:
      youtubeUrl.value = 'https://www.youtube.com/embed/RYh_BGDtc-c?start=3&end=210&autoplay=1'
      break
    case 4:
      youtubeUrl.value = 'https://www.youtube.com/embed/oWHPQgdqVcQ?start=10&end=190&autoplay=1'
      break
    case 5:
      youtubeUrl.value = 'https://www.youtube.com/embed/SjmZGTU9tPM?start=8&end=220&autoplay=1'
      break
  }
})()
</script>

<template>
  <div>
    <div class="container mt-5 d-flex justify-content-center">
      <div class="card p-3">
        <div class="d-flex align-items-center">
          <div class="image">
            <img :src="picSrc" class="rounded obj-fits" height="155"/>
          </div>
          <div class="ml-3 w-100">
            <h4 class="mb-0 mt-0">{{ fname }} {{ lname }}</h4>
            <span>{{ position }}</span>
            <div
              class="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats"
            >
              <div class="d-flex flex-column">
                <span class="articles">Repository</span>
                <span class="number1">{{ historyWork.repository }}</span>
              </div>
              <div class="d-flex flex-column">
                <span class="followers">Followers</span>
                <span class="number2">{{ historyWork.follower }}</span>
              </div>
              <div class="d-flex flex-column">
                <span class="rating">Rating</span>
                <span class="number3">{{ historyWork.rating }}</span>
              </div>
            </div>
            <div class="button mt-2 d-flex flex-row align-items-center">
              <button class="btn btn-sm btn-outline-primary w-100">Chat</button>
              <button class="btn btn-sm btn-primary w-100 ml-2">Follow</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fname: "Noppawit",
      lname: "Chowarun",
      position: "Full Stack Developer",
      historyWork: {
        repository: 34,
        follower: 7,
        rating: 8.2,
      },
      picSrc: "src/assets/125862633_1094343974357474_5941258831660389040_o.jpg",
    };
  },
};
</script>

<style>
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);
@import url(https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-alpha1/dist/css/bootstrap.min.css);
body {
  background-color: #b3e5fc;
  border-radius: 10px;
}

.obj-fit{
  object-fit: cover;
}

.card {
  width: 400px;
  border: none;
  border-radius: 10px;
  background-color: #fff;
}

.stats {
  background: #f2f5f8 !important;
  color: #000 !important;
}

.articles {
  font-size: 10px;
  color: #a1aab9;
}

.number1 {
  font-weight: 500;
}

.followers {
  font-size: 10px;
  color: #a1aab9;
}

.number2 {
  font-weight: 500;
}

.rating {
  font-size: 10px;
  color: #a1aab9;
}

.number3 {
  font-weight: 500;
}
</style>

<template>
  <div class="clock-body">
    <div class="container">
      <div class="box">
        <div class="clock">
          <div class="pointer">
            <div
              :class="`pointer-scale`"
              v-for="i in 12"
              :style="getPointXy(i)"
              :key="i"
            >
              {{ i }}
            </div>
          </div>
          <div class="hour">
            <div class="hr" :ref="setHr"></div>
          </div>
          <div class="min">
            <div class="mn" :ref="setMn"></div>
          </div>
          <div class="sec">
            <div class="sc" :ref="setSc"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
interface Point {
  left: string;
  top: string;
}
import { defineComponent, onMounted } from "vue";
export default defineComponent({
  setup() {
    const deg = 6;
    let refHr: HTMLDivElement;
    let refMn: HTMLDivElement;
    let refSc: HTMLDivElement;
    const setHr = (el: HTMLDivElement) => {
      refHr = el;
    };
    const setMn = (el: HTMLDivElement) => {
      refMn = el;
    };
    const setSc = (el: HTMLDivElement) => {
      refSc = el;
    };
    const getPointXy = (value: number): Point => {
      return {
        left: 50 + Math.sin((30 * value * Math.PI) / 180) * 50 + "%",
        top: 50 - Math.cos((30 * value * Math.PI) / 180) * 50 + "%"
      };
    };
    const initClock = (): void => {
      const day: Date = new Date();
      const hh: number = day.getHours() * 30;
      const mm: number = day.getMinutes() * deg;
      const ss: number = day.getSeconds() * deg;
      refHr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
      refMn.style.transform = `rotateZ(${mm}deg)`;
      refSc.style.transform = `rotateZ(${ss}deg)`;
    };
    onMounted(() => {
      initClock();
      setInterval(initClock, 1000);
    });
    return { setHr, setMn, setSc, getPointXy };
  }
});
</script>

<style lang="scss" scoped>
.clock-body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      $cartoon-error,
      $cartoon-error 50%,
      $cartoon-warning 50%,
      $cartoon-warning
    );
  }
  &:after {
    content: "";
    position: absolute;
    top: -20px;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      160deg,
      $cartoon-primary,
      $cartoon-primary 50%,
      transparent 50%,
      transparent
    );
    animation: animate 5s ease-in-out infinite;
  }
  .container {
    position: relative;
    &:before {
      content: "";
      position: absolute;
      bottom: -150px;
      width: 100%;
      height: 60px;
      background-color: #000;
      border-radius: 50%;
      background: radial-gradient(rgba(0, 0, 0, 0.2), transparent, transparent);
    }
    .box {
      position: relative;
      z-index: 1;
      width: 400px;
      height: 400px;
      backdrop-filter: blur(25px);
      border-radius: 50%;
      border: 1px solid rgba(255, 255, 255, 0.5);
      animation: animate 5s ease-in-out infinite;
      animation-delay: -2.5s;
      .clock {
        position: absolute;
        top: 10px;
        left: 10px;
        right: 10px;
        bottom: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: radial-gradient(transparent, rgba(255, 255, 255, 0.2));
        border-radius: 50%;
        border: 1px solid rgba(255, 255, 255, 0.5);
        border-bottom: none;
        border-right: none;
        box-shadow: -10px -10px 20px rgba(255, 255, 255, 0.1),
          10px 10px 20px rgba(0, 0, 0, 0.1), 0px 40px 50px rgba(0, 0, 0, 0.2);
        &:before {
          content: "";
          position: absolute;
          width: 15px;
          height: 15px;
          background-color: #fff;
          border-radius: 50%;
          z-index: 1000;
        }
        .hour,
        .min,
        .sec {
          position: absolute;
        }
        .hour,
        .hr {
          width: 160px;
          height: 160px;
        }
        .min,
        .mn {
          width: 190px;
          height: 190px;
        }
        .sec,
        .sc {
          width: 230px;
          height: 230px;
        }
        .hr,
        .mn,
        .sc {
          display: flex;
          justify-content: center;
          position: absolute;
          border-radius: 50%;
        }
        .hr:before {
          content: "";
          position: absolute;
          width: 8px;
          height: 80px;
          background-color: #ff105e;
          z-index: 11;
          border-radius: 6px;
        }
        .mn:before {
          content: "";
          position: absolute;
          width: 4px;
          height: 90px;
          background-color: #fff;
          z-index: 12;
          border-radius: 6px;
        }
        .sc:before {
          content: "";
          position: absolute;
          width: 2px;
          height: 150px;
          background-color: #fff;
          z-index: 12;
          border-radius: 6px;
        }
        .pointer {
          color: #fff;
          font-size: $cartoon-h2;
          position: relative;
          width: 80%;
          height: 80%;
          transform: translate(-$cartoon-h2/2, -$cartoon-h2/2);
          .pointer-scale {
            position: absolute;
            top: 0;
          }
        }
      }
    }
  }
}
@keyframes animate {
  0%,
  100% {
    transform: translateY(10px);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style>

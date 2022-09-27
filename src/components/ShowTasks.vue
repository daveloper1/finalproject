<template>
  <div class="action-buttons">
    <button class="btn btn-primary text-area" @click="sortTasksByStatus">
      Sort by status
    </button>
    <button class="btn btn-primary text-area" @click="sortTasksAlpha">
      Sort {{ sortBtnText }}
    </button>
  </div>
  <div class="tasks-container">
    <div class="card text-bg-light mb-3" v-for="task in tasks" :key="task.id">
      <div class="card-header">
        <input
          type="checkbox"
          class="btn-check"
          :id="task.id"
          @click="handleEditStatus(task.is_complete, task.id)"
          autocomplete="off"
          v-model="task.is_complete"
        />
        <label
          v-if="task.is_complete"
          class="btn btn-outline-primary"
          :for="task.id"
          >DONE!</label
        >
        <label
          v-else
          class="btn btn-outline-primary"
          :class="{ 'btn-pending': !task.is_complete }"
          :for="task.id"
          >Pending</label
        ><br />
        <input
          class="task-title"
          v-model="task.title"
          @change="handleEditTitle(task.title, task.id)"
          data-bs-toggle="collapse"
          :data-bs-target="'#t' + task.id.toString()"
          aria-expanded="false"
          :aria-controls="'t' + task.id.toString()"
        />
        <button
          type="button"
          class="btn-close"
          aria-label="Close"
          @click="handleDeleteTask(task.id)"
        ></button>
      </div>
      <div class="card-body collapse" :id="'t' + task.id.toString()">
        <h5 class="card-title">Task description</h5>
        <p class="card-text">
          {{ task.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import taskStore from "@/store/task";

export default {
  name: "ShowTasks",
  data() {
    return {
      sortStatus: 1,
      sortAlpha: 1,
      sortBtnText: "A-Z",
    };
  },
  computed: {
    ...mapState(taskStore, ["tasks"]),
  },
  methods: {
    ...mapActions(taskStore, ["deleteTask", "editStatus", "editTitle"]),

    handleDeleteTask(taskId) {
      try {
        this.deleteTask(taskId);
      } catch (error) {
        alert("Error deleting the task:", error.message);
      }
    },

    handleEditStatus(status, taskID) {
      try {
        this.editStatus(!status, taskID);
      } catch (error) {
        alert("Error editing the task status: ", error.message);
      }
    },
    handleEditTitle(newTitle, taskID) {
      try {
        this.editTitle(newTitle, taskID);
      } catch (error) {
        alert("Error editing the task title:", error.message);
      }
    },
    sortTasksByStatus() {
      let stat = this.sortStatus;
      this.tasks.sort(function (a, b) {
        if (a.is_complete < b.is_complete) {
          return stat * -1;
        }
        if (a.is_complete > b.is_complete) {
          return stat;
        }
        return 0;
      });
      this.sortStatus = -this.sortStatus;
    },
    sortTasksAlpha() {
      let stat = this.sortAlpha;

      this.tasks.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
          return -stat;
        }
        if (a.title.toLowerCase() > b.title.toLowerCase()) {
          return stat;
        }
        return 0;
      });
      this.sortAlpha = -this.sortAlpha;
      if (this.sortAlpha == "1") {
        this.sortBtnText = "A-Z";
      } else if (this.sortAlpha == "-1") {
        this.sortBtnText = "Z-A";
      } else {
        alert("Some error has occurred");
      }
    },
  },
};
</script>

<style>
.action-buttons {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
}
.tasks-container {
  height: calc(100% - 20rem);
  overflow-y: scroll;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
}
.card {
  width: 100%;
  max-width: 23rem;
}
.btn-pending {
  background-color: rgb(118 118 118 / 60%);
  color: white;
}
.card-header {
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
}
.btn-pending,
.btn-outline-primary {
  width: 85px;
}
.task-title {
  width: 55%;
}

@media only screen and (min-width: 415px) {
  .action-buttons {
    margin: 0 auto;
    width: 60%;
    margin-bottom: 3%;
  }
  .tasks-container {
    width: 95%;
    max-width: 95%;
    margin: 0 auto;
    height: calc(100% - 45vh);
    display: flex;
    flex-direction: row;
    align-content: flex-start;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    overflow-y: scroll;
  }
  .card {
    width: 45%;
    margin-left: 3%;
  }
}
</style>

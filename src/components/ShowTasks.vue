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
          class="btn btn-outline-primary btn-done"
          :for="task.id"
          >DONE</label
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
        <input
          type="text"
          class="task-description"
          v-model="task.description"
          @change="handleEditDescription(task.description, task.id)"
        />
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
    ...mapActions(taskStore, [
      "deleteTask",
      "editStatus",
      "editTitle",
      "editDescription",
    ]),

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
    handleEditDescription(newDescription, taskID) {
      try {
        this.editDescription(newDescription, taskID);
      } catch (error) {
        alert("Error editing the task description:", error.message);
      }
    },
    sortTasksByStatus() {
      let stat = this.sortStatus;
      console.log(stat);
      this.tasks.sort((a, b) => {
        if (a.is_complete === b.is_complete) {
          return a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1;
        } else {
          return a.is_complete < b.is_complete ? -stat : stat;
        }
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
  margin: 20px 0 20px 0;
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

.card-header {
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  background-color: ghostwhite;
}
.btn-primary {
  border-color: #c1802a;
  background-color: #1e4e4c;
  --bs-btn-hover-bg: #18b749;
}
.btn-primary:hover {
  background-color: #55afab;
}
.btn-check:checked + .btn {
  background-color: #00721e;
  border-color: #0a4200;
}
.btn {
  width: 100%;
}
.btn-pending {
  background-color: rgb(118 118 118 / 60%);
  color: white;
}

.btn-pending,
.btn-outline-primary {
  width: 30%;
}
.btn-primary {
  width: 35%;
}

.task-title,
.task-description {
  width: 55%;
  border-radius: 5px;
  border-color: #d5d5d5;
}
.task-description {
  width: 100%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  resize: none;
  vertical-align: top;
}

@media only screen and (min-width: 415px) {
  .action-buttons {
    margin: 0 auto;
    margin-top: 20px;
    width: 60%;
    margin-bottom: 3%;
    display: flex;
    justify-content: space-between;
  }
  .btn-pending,
  .btn-outline-primary {
    width: 34%;
  }
  .btn-done {
    background-color: #00721e;
    border-color: #0a4200;
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
    justify-content: center;
    align-items: flex-start;
    overflow-y: scroll;
    text-align: justify;
    border-radius: 5px;
  }

  ::-webkit-scrollbar {
    display: none;
  }
  .card {
    width: 45%;
    margin-left: 3%;
  }
}
</style>

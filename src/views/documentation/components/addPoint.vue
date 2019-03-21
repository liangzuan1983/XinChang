<template>
  <div class="addPoint">
    <div class="amap-wrapper">
      <el-amap vid="amapDemo" :zoom="zoom" :center="center" class="amap-box">
        <el-amap-marker
          v-for="(marker, index) in markers"
          :key="index"
          :position="marker.position"
          :events="marker.events"
          :visible="marker.visible"
          :draggable="marker.draggable"
          :vid="index"
        />
      </el-amap>
    </div>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <template>
        <el-form-item label="预警事件" prop="name">
          <el-col :span="12">
            <el-input
              v-model="ruleForm.name"
              placeholder="不超过20个字符"
            ></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="客流阈值设置" prop="threshold">
          <el-col :span="12">
            <el-input
              v-model="ruleForm.threshold"
              placeholder="设置阈值上下限"
            ></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="时间范围设置" prop="timeHorizon">
          <el-radio-group v-model="ruleForm.timeHorizon">
            <el-radio label="未来三天"></el-radio>
            <el-radio label="未来一周"></el-radio>
            <el-radio label="未来两周"></el-radio>
            <el-radio label="未来一个月"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="预案设置" prop="particulars">
          <el-col :span="12">
            <el-input
              type="textarea"
              :rows="4"
              v-model="ruleForm.particulars"
              placeholder="不超过200个字符"
            ></el-input>
          </el-col>
        </el-form-item>
      </template>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm', true)"
          >提交并继续添加</el-button
        >
        <el-button type="primary" @click="submitForm('ruleForm')"
          >提交</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from "axios";
import { addSchemes } from "../../../api/documentation";
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        threshold: "",
        timeHorizon: "",
        particulars: "",
        scenicId: this.$route.query.scenicId || ""
      },
      rules: {
        name: [
          { required: true, message: "请输入点位名称", trigger: "blur" },
          { max: 20, message: "不超过20个字符", trigger: "change" }
        ],
        threshold: [
          { required: true, message: "请设置阈值上下限", trigger: "blur" }
        ],
        timeHorizon: [
          { required: true, message: "请选择预测客流时间", trigger: "blur" }
        ],
        particulars: [
          { max: 200, message: "不超过200个字符", trigger: "change" }
        ]
      },
      zoom: 14,
      center: [120.901737, 29.497975],
      markers: [
        {
          position: [120.901737, 29.497975],
          events: {
            click: () => {
              alert("click marker");
            },
            dragend: e => {
              console.log("---event---: dragend");
              this.markers[0].position = [e.lnglat.lng, e.lnglat.lat];
            }
          },
          visible: true,
          draggable: false,
          template: "<span>1</span>"
        }
      ]
    };
  },
  mounted() {},
  methods: {
    submitForm(formName, isContinue) {
      const self = this;
      self.$refs[formName].validate(valid => {
        if (valid) {
          addSchemes(self.ruleForm).then(res => {
            if (res.data.success) {
              self.$message({
                type: "success",
                message: "提交成功!"
              });
              self.$refs[formName].resetFields();
              if (isContinue) {
                self.$refs[formName].resetFields();
              } else {
                self.$router.push({
                  path: "/documentation/setup"
                });
              }
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss">
.addPoint {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 999;
  padding: 1%;
  .whiteColor {
    color: white;
  }
  .el-form-item__label {
    color: #bbd5ff;
  }
  .amap-wrapper {
    width: 51%;
    height: 50%;
    margin-bottom: 2%;
    margin-left: 3%;
    .amap-box {
      width: 100%;
      height: 100%;
    }
  }
  .el-radio {
    color: #ffffff;
  }
}
</style>

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
          :vid="index"/>
      </el-amap>
    </div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="点位名称" prop="name">
        <el-col :span="12">
          <el-input v-model="ruleForm.name"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="客流阈值设置" prop="yuzhi">
        <el-col :span="12">
          <el-input></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="预案选择" prop="region">
        <el-select v-model="ruleForm.region" placeholder="请选择预案选项">
          <el-option label="预案选项一" value="shanghai"></el-option>
          <el-option label="预案选项二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="客流时间设置" prop="resource">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="未来三天"></el-radio>
          <el-radio label="未来一周"></el-radio>
          <el-radio label="未来两周"></el-radio>
          <el-radio label="未来一个月"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        name: '',
        region: '',
        resource: '',
        yuzhi: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入点位名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择预案选项', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择预测客流时间', trigger: 'change' }
        ]
      },
      zoom: 14,
      center: [120.901737, 29.497975],
      markers: [
        {
          position: [120.901737, 29.497975],
          events: {
            click: () => {
              alert('click marker');
            },
            dragend: (e) => {
              console.log('---event---: dragend')
              this.markers[0].position = [e.lnglat.lng, e.lnglat.lat];
            }
          },
          visible: true,
          draggable: false,
          template: '<span>1</span>',
        }
      ]
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style lang="scss">
  .addPoint {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 999;
    padding: 1%;
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


<template>
  <div class="addWarn">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="预案名称" prop="name">
        <el-col :span="12">
          <el-input v-model="ruleForm.name"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="预警内容">
        <smeditor :config='config'/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import SMEditor from 'smeditor'
export default {
  components: {
    'smeditor': SMEditor
  },
  data() {
    return {
      config: {
        // 接口地址
        uploadUrl: '',
        // form 里的 filename
        uploadName: '',
        // 其他参数
        uploadParams: {},
      },
      ruleForm: {
        name: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入点位名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 上传成功回调
    uploadCallback: (data) => {
      console.log(data)
      return 'blob:https://fiddle.jshell.net/00a0b0b4-d19a-4860-9796-137692aef36f'
    },
    // 上传失败回调, 可选
    uploadFailed: (err) => {
      console.log(err)
    },
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
  .addWarn {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 999;
    padding: 2%;
    .smeditor .input-area {
      width: 100%;
      box-shadow: none;
    }
    .smeditor {
      margin: 0;
    }
    .el-form-item__label {
      color: #bbd5ff;
    }
  }
</style>


<template>
<div>
    <Layout style="width:100%;height:100%;">
        <LayoutPanel region="north" style="height:50px;">
            <div class="title">North Region</div>
        </LayoutPanel>
        <LayoutPanel region="south" style="height:50px;">
            <div class="title">South Region</div>
        </LayoutPanel>
        <LayoutPanel region="west" style="width:200px;">
            <div class="title">

		        <h2>导航</h2>
		        <Tree :data="treedata" @selectionChange="selection=$event"></Tree>
		    <p v-if="selection">Selected: {{selection.text}}</p>

            </div>
        </LayoutPanel>
        <LayoutPanel region="center" style="height:100%">
            <div class="title">

        <div style="margin-bottom:10px">
            <Label for="c1">Pager on: </Label>
            <ComboBox inputId="c1" style="width:120px"
                    :data="pageOptions" 
                    v-model="pagePosition" 
                    :editable="false"
                    :panelStyle="{height:'auto'}">
            </ComboBox>
        </div>
        <DataGrid style="height:100%"
                :pagination="true"
                :data="data"
                :total="total"
                :pageSize="pageSize"
                :pagePosition="pagePosition">
            <GridColumn field="inv" title="Inv No"></GridColumn>
            <GridColumn field="name" title="Name"></GridColumn>
            <GridColumn field="amount" title="Amount" align="right"></GridColumn>
            <GridColumn field="price" title="Price" align="right"></GridColumn>
            <GridColumn field="cost" title="Cost" align="right"></GridColumn>
            <GridColumn field="note" title="Note"></GridColumn>
        </DataGrid>

            </div>
        </LayoutPanel>
    </Layout>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      total: 10000,
      pageSize: 20,
      data: [],
      pagePosition: "bottom",
      pageOptions: [
        { value: "bottom", text: "Bottom" },
        { value: "top", text: "Top" },
        { value: "both", text: "Both" }
      ],
      treedata: this.getTreeData()
    };
  },
  created() {
    this.data = this.getData(this.total);
  },
  methods: {
    getData(total) {
      let data = [];
      for (let i = 1; i <= total; i++) {
        let amount = Math.floor(Math.random() * 1000);
        let price = Math.floor(Math.random() * 1000);
        data.push({
          inv: "Inv No " + i,
          name: "Name " + i,
          amount: amount,
          price: price,
          cost: amount * price,
          note: "Note " + i
        });
      }
      return data;
    },

    getTreeData() {
      return [
        {
          id: 1,
          text: "My Documents",
          children: [
            {
              id: 11,
              text: "Photos",
              state: "closed",
              children: [
                {
                  id: 111,
                  text: "Friend"
                },
                {
                  id: 112,
                  text: "Wife"
                },
                {
                  id: 113,
                  text: "Company"
                }
              ]
            },
            {
              id: 12,
              text: "Program Files",
              children: [
                {
                  id: 121,
                  text: "Intel"
                },
                {
                  id: 122,
                  text: "Java"
                },
                {
                  id: 123,
                  text: "Microsoft Office"
                },
                {
                  id: 124,
                  text: "Games"
                }
              ]
            },
            {
              id: 13,
              text: "index.html"
            },
            {
              id: 14,
              text: "about.html"
            },
            {
              id: 15,
              text: "welcome.html"
            }
          ]
        }
      ];
    }

  }
};
</script>
<style>
.title {
  text-align: center;
  margin-top: 10px;
}
</style>
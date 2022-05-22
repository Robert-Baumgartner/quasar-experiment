<template>
  <div class="q-mx-xl">
    <q-table
      :rows="products"
      :pagination="pagination"
      title="Products"
      row-key="id"
      :columns="columns"
    >
      <template #body-cell-image="props">
        <q-td :props="props">
          <q-img width="120px" :src="props.value"></q-img>
        </q-td>
      </template>
      <template style="background: green" #body-cell-action="props">
        <q-td> <q-btn @click="del(props.key)" round icon="delete" class="text-negative" /></q-td>
      </template>
    </q-table>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useProductStore } from '../stores/productsStore';
let { products } = storeToRefs(useProductStore());

const del = (key: number) => {
  useProductStore().removeProduct(key);
};
const pagination = {
  rowsPerPage: 10,
};
const columns: any[] = [
  {
    name: 'image',
    label: 'Image',
    field: 'images',
    align: 'left',
    format: (images: string) => images[0],

  },
  {
    name: 'title',
    label: 'Title',
    field: 'title',
    align: 'left',
    sortable: true,
    style: 'font-weight: bold',
  },
  {
    name: 'brand',
    label: 'Brand',
    align: 'left',
    field: 'brand',
  },
  {
    name: 'description',
    label: 'Description',
    field: 'description',
    align: 'left',
    style: 'font-style: italic',
    format: (description: string) => `${description.substring(0, 60)}...`,
  },
  {
    name: 'price',
    label: 'Price',
    field: 'price',
    align: 'right',
    format: (price: number) => `€${price}`,
    sortable: true,

  },
  {
    name: 'stock',
    label: 'In Stock',
    align: 'right',
    field: 'stock',
  },
  {
    name: 'action',
    label: 'Action',
    align: 'left',
  },
];
</script>

<style>
.q-table__title {
  font-size: 40px !important;
}
.q-table thead tr th {
  font-weight: bold;
  font-size: 15px;
}
.q-table tbody tr {
  height: 120px;
}
</style>

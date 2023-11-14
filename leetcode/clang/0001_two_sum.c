/**
 * 1. Two Sum
 * Problem Link: https://leetcode.com/problems/two-sum/
 * Solution Link (Personal):
 */


#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

typedef struct Node {
    int key;
    int value;
    struct Node* next;
} Node;

typedef struct HashTable {
    Node** nodes;
    int size;
} HashTable;

int hash(int key, int size) {
    return abs(key) % size;
}

Node* createNode(int key, int value) {
    Node* newNode = (Node*)malloc(sizeof(Node));
    newNode->key = key;
    newNode->value = value;
    newNode->next = NULL;
    return newNode;
}

HashTable* createHashTable(int size) {
    HashTable* table = (HashTable*)malloc(sizeof(HashTable));
    table->size = size;
    table->nodes = (Node**)malloc(size * sizeof(Node*));
    for (int i = 0; i < size; ++i) {
        table->nodes[i] = NULL;
    }
    return table;
}

void insert(HashTable* table, int key, int value) {
    int index = hash(key, table->size);
    Node* newNode = createNode(key, value);
    newNode->next = table->nodes[index];
    table->nodes[index] = newNode;
}

int* twoSum(int* nums, int numsSize, int target, int* returnSize) {
    HashTable* table = createHashTable(numsSize);

    for (int i = 0; i < numsSize; ++i) {
        int complement = target - nums[i];
        int index = hash(complement, numsSize);
        Node* node = table->nodes[index];
        while (node != NULL) {
            if (node->key == complement) {
                int* result = (int*)malloc(2 * sizeof(int));
                result[0] = node->value;
                result[1] = i;
                *returnSize = 2;
                return result;
            }
            node = node->next;
        }
        insert(table, nums[i], i);
    }

    *returnSize = 0;
    return NULL;
}